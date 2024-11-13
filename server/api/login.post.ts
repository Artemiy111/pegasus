import { verify } from 'argon2'
import { z } from 'zod'
import { db } from '../db'
import { eq } from 'drizzle-orm'
import { users as usersTable } from '../db/schema'
import { UnsecuredJWT } from 'jose'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, loginSchema.parse)

  const user = await db.query.users.findFirst({ where: eq(usersTable.email, body.email) })
  if (!user) throw createError({
    statusCode: 401,
    message: 'Неверный логин или пароль',
  })

  if (!(await verify(user.passwordHash, body.password))) throw createError({
    statusCode: 401,
    message: 'Неверный логин или пароль',
  })
  const { passwordHash: _, ...userData } = user

  const token = new UnsecuredJWT({
    user: userData,
  })
    .setIssuedAt()
    .setExpirationTime('1h')
    .encode()

  setCookie(event, 'token', token)

  return {
    token,
    user: userData,
  }
})
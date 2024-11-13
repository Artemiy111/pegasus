import { hash } from 'argon2'
import { z } from 'zod'
import { db } from '../db'
import { eq } from 'drizzle-orm'
import { users as usersTable } from '../db/schema'
import { UnsecuredJWT } from 'jose'

const loginSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string().min(1),
  confirmPassword: z.string().min(1),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Пароли не совпадают',
  path: ['confirmPassword'],
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, loginSchema.parse)

  const passwordHash = await hash(body.password)

  const existingUser = await db.query.users.findFirst({ where: eq(usersTable.email, body.email) })
  if (existingUser) throw createError({
    statusCode: 401,
    message: 'Пользователь с такой почтой уже существует',
  })

  const user = (await db.insert(usersTable).values({
    name: body.name,
    email: body.email,
    phone: body.phone,
    passwordHash,
  }).returning())[0]

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
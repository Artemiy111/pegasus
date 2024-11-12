import { z } from 'zod'
import { UnsecuredJWT } from 'jose'
import { reviews, User } from '../db/schema'
import { db } from '../db'

const reviewSchema = z.object({
  text: z.string(),
  arrivalCityId: z.number(),
  originCity: z.string(),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, reviewSchema.parse)
  const token = getCookie(event, 'token')
  if (!token) throw createError({
    statusCode: 401,
    message: 'Необходимо авторизоваться',
  })
  const decoded = UnsecuredJWT.decode(token)
  if (!decoded) throw createError({
    statusCode: 401,
    message: 'Неверный токен',
  })
  const user = decoded.payload as User
  console.log(user)

  const review = (await db.insert(reviews).values({
    arrivalCityId: body.arrivalCityId,
    originCity: body.originCity,
    text: body.text,
    userId: user.id,
  }).returning())[0]

  console.log(review)

  return review
})
import { z } from 'zod'
import { reviews, User } from '../db/schema'
import { db } from '../db'
import { assertAuthed } from '../lib/assert-authed'

const reviewSchema = z.object({
  text: z.string(),
  arrivalCityId: z.coerce.number(),
  originCity: z.string(),
})

export default defineEventHandler(async (event) => {
  const { user } = assertAuthed(event)
  const body = await readValidatedBody(event, reviewSchema.parse)

  console.log(body)
  const review = (await db.insert(reviews).values({
    arrivalCityId: body.arrivalCityId,
    originCity: body.originCity,
    text: body.text,
    userId: user.id,
  }).returning())[0]

  return review
})
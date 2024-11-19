import { z } from 'zod'
import { assertAuthed } from '../lib/assert-authed'

import { db } from '../db'
import { cartItems } from '../db/schema'

const schema = z.object({
  flightId: z.number(),
})

export default defineEventHandler(async (event) => {
  const { user } = assertAuthed(event)
  const body = await readValidatedBody(event, schema.parse)

  await db.insert(cartItems).values({ flightId: body.flightId, quantity: 1, userId: user.id })
})
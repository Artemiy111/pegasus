import { z } from 'zod'
import { db } from '../db'
import { cartItems, users } from '../db/schema'
import { and, eq } from 'drizzle-orm'
import { assertAuthed } from '../lib/assert-authed'

const schema = z.object({
  flightId: z.number(),
  quantity: z.number(),
})

export default defineEventHandler(async (event) => {
  const { user } = assertAuthed(event)
  const body = await readValidatedBody(event, schema.parse)

  if (body.quantity === 0) await db.delete(cartItems)
    .where(and(
      eq(cartItems.userId, user.id),
      eq(cartItems.flightId, body.flightId))
    )

  else await db.update(cartItems)
    .set({ quantity: body.quantity })
    .where(and(
      eq(cartItems.userId, user.id),
      eq(cartItems.flightId, body.flightId))
    )
})
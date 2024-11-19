import { z } from 'zod'
import { assertAuthed } from '../lib/assert-authed'
import { db } from '../db'
import { orderItems as orderItemsTable, orders as ordersTable, cartItems as cartItemsTable } from '../db/schema'
import { eq } from 'drizzle-orm'
import { useRequestFetch } from 'nuxt/app'


export default defineEventHandler(async (event) => {
  const { user } = assertAuthed(event)
  const { cartItems } = await event.$fetch('/api/get-cart-items')

  db.transaction(async (tx) => {
    const order = (await tx.insert(ordersTable).values({ userId: user.id }).returning())[0]

    await tx.insert(orderItemsTable).values(cartItems.map(item => ({
      userId: user.id,
      orderId: order.id,
      flightId: item.flightId,
      quantity: item.quantity,
      price: item.flight.price,
      priceDiscounted: item.flight.priceDiscounted,
    })))

    await tx.delete(cartItemsTable).where(eq(cartItemsTable.userId, user.id))
  })
})
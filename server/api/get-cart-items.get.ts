import { db } from '../db'
import { assertAuthed } from '../lib/assert-authed'
import { cartItems, tours, flights } from '../db/schema'
import { eq, getTableColumns } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const { user } = assertAuthed(event)
  const cartItems_ = await db.select({
    ...getTableColumns(cartItems),
    tour: { ...getTableColumns(tours) },
    flight: { ...getTableColumns(flights) }
  })
    .from(cartItems)
    .where(eq(cartItems.userId, user.id))
    .innerJoin(flights, eq(cartItems.flightId, flights.id))
    .innerJoin(tours, eq(tours.id, flights.tourId))

  const totalQuantity = cartItems_.reduce((acc, item) => acc + item.quantity, 0)
  const totalPriceWithoutDiscount = cartItems_.reduce((acc, item) => acc + item.flight.price * item.quantity, 0)
  const totalPriceWithDiscount = cartItems_.reduce((acc, item) => {
    if (item.flight.priceDiscounted === null) return acc + item.flight.price * item.quantity
    return acc + item.flight.priceDiscounted * item.quantity
  }, 0)
  const totalDiscount = totalPriceWithoutDiscount - totalPriceWithDiscount

  return {
    cartItems: cartItems_,
    total: {
      totalQuantity,
      totalPriceWithoutDiscount,
      totalPriceWithDiscount,
      totalDiscount
    }
  }
})
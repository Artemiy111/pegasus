import { db } from '../db'
import { assertAuthed } from '../lib/assert-authed'
import { cartItems, tours, flights, cities, countries } from '../db/schema'
import { aliasedTable, eq, getTableColumns } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const { user } = assertAuthed(event)

  const departureCities = aliasedTable(cities, 'dc')
  const departureCountries = aliasedTable(countries, 'dco')
  const arrivalCities = aliasedTable(cities, 'aci')
  const arrivalCountries = aliasedTable(countries, 'aco')

  const cartItems_ = await db.select({
    ...getTableColumns(cartItems),
    tour: { ...getTableColumns(tours) },
    flight: { ...getTableColumns(flights) },
    departureCity: departureCities.name,
    departureCountry: departureCountries.name,
    arrivalCity: arrivalCities.name,
    arrivalCountry: arrivalCountries.name,
  })
    .from(cartItems)
    .where(eq(cartItems.userId, user.id))
    .innerJoin(flights, eq(cartItems.flightId, flights.id))
    .innerJoin(tours, eq(tours.id, flights.tourId))
    .innerJoin(departureCities, eq(departureCities.id, flights.departureCityId))
    .innerJoin(departureCountries, eq(departureCountries.id, departureCities.countryId))
    .innerJoin(arrivalCities, eq(arrivalCities.id, tours.cityId))
    .innerJoin(arrivalCountries, eq(arrivalCountries.id, arrivalCities.countryId))

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
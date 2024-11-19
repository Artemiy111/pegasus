
import { aliasedTable, and, eq, getTableColumns, isNotNull, sql } from 'drizzle-orm'
import { z } from 'zod'
import { db } from '~~/server/db'
import {
  users as usersTable,
  tours as toursTable,
  flights as flightsTable,
  cities as citiesTable,
  countries as countriesTable,
  cartItems,
} from '~~/server/db/schema'
import { maybeAuthed } from '../lib/maybe-authed'

const schema = z.object({
  slug: z.coerce.string(),
  // departureCity: z.string().optional().transform(v => !v ? '' : v),
  departureDate: z.string().optional().transform(v => !v ? '' : v),
  arrivalDate: z.string().optional().transform(v => !v ? '' : v)
})

export default defineEventHandler(async (event) => {
  const user = maybeAuthed(event)
  const { slug, departureDate, arrivalDate } = await getValidatedQuery(event, schema.parse)

  const arrivalCitiesTable = aliasedTable(citiesTable, 'aci')

  const tourFlights = await db
    .select({
      ...getTableColumns(flightsTable),
      departureCityName: citiesTable.name,
      departureCountryName: countriesTable.name,
      arrivalCityName: arrivalCitiesTable.name,
      quantityInCart: cartItems.quantity
    })
    .from(flightsTable)
    .innerJoin(toursTable, eq(toursTable.id, flightsTable.tourId))
    .innerJoin(citiesTable, eq(citiesTable.id, flightsTable.departureCityId))
    .innerJoin(countriesTable, eq(countriesTable.id, citiesTable.countryId))
    .innerJoin(arrivalCitiesTable, eq(arrivalCitiesTable.id, toursTable.cityId))
    .leftJoin(cartItems, and(eq(cartItems.userId, user?.id || -1), eq(cartItems.flightId, flightsTable.id)))
    .where(and(
      eq(toursTable.slug, slug),
      sql`(${flightsTable.departureDate} >= ${departureDate} or ${departureDate} = '')`,
      sql`(${flightsTable.arrivalDate} <= ${arrivalDate} or ${arrivalDate} = '')`,
      // sql`(${cartItems.userId} = ${user?.id} or '${user?.id || ''}' = '')`
    ))

  return tourFlights
})
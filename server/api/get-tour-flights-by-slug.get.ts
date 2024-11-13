
import { aliasedTable, and, eq, getTableColumns, sql } from 'drizzle-orm'
import { z } from 'zod'
import { db } from '~~/server/db'
import {
  tours as toursTable,
  flights as flightsTable,
  cities as citiesTable,
  countries as countriesTable,
} from '~~/server/db/schema'

const schema = z.object({
  slug: z.coerce.string(),
  // departureCity: z.string().optional().transform(v => !v ? '' : v),
  departureDate: z.string().optional().transform(v => !v ? '' : v),
  arrivalDate: z.string().optional().transform(v => !v ? '' : v)
})

export default defineEventHandler(async (event) => {
  const q = await getValidatedQuery(event, schema.parse)
  const { slug, departureDate, arrivalDate } = q

  const arrivalCitiesTable = aliasedTable(citiesTable, 'aci')

  const tourFlights = await db
    .select({
      ...getTableColumns(flightsTable),
      departureCityName: citiesTable.name,
      departureCountryName: countriesTable.name,
      arrivalCityName: arrivalCitiesTable.name,
    })
    .from(flightsTable)
    .innerJoin(toursTable, eq(toursTable.id, flightsTable.tourId))
    .innerJoin(citiesTable, eq(citiesTable.id, flightsTable.departureCityId))
    .innerJoin(countriesTable, eq(countriesTable.id, citiesTable.countryId))
    .innerJoin(arrivalCitiesTable, eq(arrivalCitiesTable.id, toursTable.cityId))
    .where(and(
      eq(toursTable.slug, slug),
      // sql`(${citiesTable.name} = ${departureCity} or ${departureCity} = '')`,
      sql`(${flightsTable.departureDate} >= ${departureDate} or ${departureDate} = '')`,
      sql`(${flightsTable.arrivalDate} <= ${arrivalDate} or ${arrivalDate} = '')`,
      // sql`(${arrivalCitiesTable.name} = ${arrivalCity} or ${arrivalCity} = '')`,
    ))

  return tourFlights
})
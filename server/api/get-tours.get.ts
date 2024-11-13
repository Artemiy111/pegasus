import { eq, getTableColumns, max, min, sql, like, and, or, isNull, aliasedTable } from 'drizzle-orm'
import { z } from 'zod'
import { db } from '~~/server/db'
import {
  flights as flightsTable,
  tours as toursTable,
  cities as citiesTable,
  countries as countriesTable,
} from '~~/server/db/schema'

const schema = z.object({
  departureCity: z.string().optional().transform(v => !v ? '' : v),
  departureDate: z.string().optional().transform(v => !v ? '' : v),
  arrivalCity: z.string().optional().transform(v => !v ? '' : v),
  arrivalDate: z.string().optional().transform(v => !v ? '' : v)
})

export default defineEventHandler(async (event) => {
  const { departureCity, departureDate, arrivalCity, arrivalDate } = await getValidatedQuery(event, schema.parse)

  const tours = await db.select({
    ...getTableColumns(toursTable),
    arrivalCityName: citiesTable.name,
    arrivalCountryName: countriesTable.name,
  })
    .from(toursTable)
    .innerJoin(citiesTable, eq(toursTable.cityId, citiesTable.id))
    .innerJoin(countriesTable, eq(citiesTable.countryId, countriesTable.id))
    .where(
      sql`(${citiesTable.name} = ${arrivalCity} or ${arrivalCity} = '')`
    )

  const toursWithFlights = await Promise.all(tours.map(async t => {
    const flights = await $fetch('/api/get-tour-flights-by-slug', {
      query: {
        slug: t.slug,
        // departureCity,
        departureDate,
        arrivalDate
      }
    })

    console.log(flights)
    if (!flights.length) return { ...t, passFilter: departureCity === '' }

    const flightsWithDepartureCity = flights.filter(f => departureCity === '' ? true : f.departureCityName === departureCity)
    console.log(flightsWithDepartureCity)
    return {
      ...t,
      flights: flightsWithDepartureCity,
      passFilter: flightsWithDepartureCity.length > 0,
      minPrice: Math.min(...flights.map(f => f.price)),
      earliestDepartureDate: flights.map(f => f.departureDate).toSorted()[0]
    }
  }))
  const filtered = toursWithFlights.filter(t => t.passFilter)

  return filtered
})
import { eq, getTableColumns, max, min, sql, like, and, or, isNull, aliasedTable } from 'drizzle-orm'
import { db } from '~~/server/db'
import {
  flights as flightsTable,
  tours as toursTable,
  cities as citiesTable,
  countries as countriesTable,
} from '~~/server/db/schema'

export default defineEventHandler(async (event) => {
  const getParsedQuery = () => {
    const query = getQuery(event)
    return {
      departure: query.departure?.toString() ?? '',
      departureDate: query.departureDate?.toString() ?? '',
      arrival: query.arrival?.toString() ?? '',
      arrivalDate: query.arrivalDate?.toString() ?? '',
    }
  }

  const { departure, departureDate, arrival, arrivalDate } = getParsedQuery()
  console.log({ departure, departureDate, arrival, arrivalDate })

  const departureCitiesTable = aliasedTable(citiesTable, 'dci')

  const arrivalCitiesTable = aliasedTable(citiesTable, 'aci')
  const arrivalCountriesTable = aliasedTable(countriesTable, 'aco')


  return db
    .select({
      ...getTableColumns(toursTable),
      arrivalCityName: arrivalCitiesTable.name,
      arrivalCountryName: arrivalCountriesTable.name,
      flights: {
        minPrice: min(flightsTable.price),
        earliestDate: min(flightsTable.departureDate),
      },
    })
    .from(toursTable)
    .innerJoin(arrivalCitiesTable, eq(arrivalCitiesTable.id, toursTable.cityId))
    .innerJoin(arrivalCountriesTable, eq(arrivalCountriesTable.id, arrivalCitiesTable.countryId))
    .innerJoin(flightsTable, eq(flightsTable.tourId, toursTable.id))

    .innerJoin(departureCitiesTable, eq(departureCitiesTable.id, flightsTable.departureCityId))
    .groupBy(toursTable.id)
    .where(
      and(
        sql`${departureCitiesTable.name} = ${departure} or ${departure} = ''`,
        sql`${flightsTable.departureDate} = ${departureDate} or ${departureDate} = ''`,
        sql`${arrivalCitiesTable.name} = ${arrival} or ${arrival} = ''`,
        sql`${flightsTable.arrivalDate} = ${arrivalDate} or ${arrivalDate} = ''`,
      ),
    )
})
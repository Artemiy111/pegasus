import { eq, getTableColumns } from 'drizzle-orm'
import { db } from '../db'
import { cities, countries } from '../db/schema'

export default defineEventHandler(async event => {
  const arrivalCities = await db
    .select({ ...getTableColumns(cities), countryName: countries.name })
    .from(cities)
    .innerJoin(countries, eq(cities.countryId, countries.id))

  return arrivalCities
})
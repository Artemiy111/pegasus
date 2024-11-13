import { eq, getTableColumns } from 'drizzle-orm'
import { z } from 'zod'
import { db } from '~~/server/db'
import {
  tours as toursTable,
  flights as flightsTable,
  cities as citiesTable,
  countries as countriesTable,
} from '~~/server/db/schema'


const schema = z.object({ slug: z.coerce.string() })

export default defineEventHandler(async (event) => {
  console.log('get tour by slug')
  const { slug } = await getValidatedQuery(event, schema.parse)

  const tour = db
    .select({
      ...getTableColumns(toursTable),
      arrivalCityName: citiesTable.name,
      arrivalCountryName: countriesTable.name,
    })
    .from(toursTable)
    .innerJoin(citiesTable, eq(toursTable.cityId, citiesTable.id))
    .innerJoin(countriesTable, eq(citiesTable.countryId, countriesTable.id))
    .where(eq(toursTable.slug, slug))
    .then(ts => ts[0])

  return tour
})
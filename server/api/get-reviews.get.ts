import { getTableColumns, eq } from 'drizzle-orm'
import { db } from '~~/server/db'
import {
  cities as citiesTable,
  reviews as reviewsTable,
  users as usersTable,
} from '~~/server/db/schema'

export default defineEventHandler(async (event) => {
  return db
    .select({
      ...getTableColumns(reviewsTable),
      user: {
        name: usersTable.name,
      },
      arrivalCity: {
        name: citiesTable.name,
      },
    })
    .from(reviewsTable)
    .innerJoin(citiesTable, eq(reviewsTable.arrivalCityId, citiesTable.id))
    .innerJoin(usersTable, eq(reviewsTable.userId, usersTable.id))
})
import { relations } from 'drizzle-orm'
import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: int().primaryKey(),
  name: text().notNull(),
  email: text().unique().notNull(),
  phone: text().notNull(),
  passwordHash: text().notNull(),
})

export type User = typeof users.$inferSelect
export type UserNew = typeof users.$inferInsert

export const countries = sqliteTable('countries', {
  id: int().primaryKey(),
  name: text().notNull(),
})

export type Country = typeof countries.$inferSelect
export type CountryNew = typeof countries.$inferInsert

export const cities = sqliteTable('cities', {
  id: int().primaryKey(),
  name: text().unique().notNull(),
  countryId: int().references(() => countries.id).notNull(),
  type: text({ 'enum': ['departure', 'arrival'] }).notNull()
})

export type City = typeof cities.$inferSelect
export type CityNew = typeof cities.$inferInsert

export const tours = sqliteTable('tours', {
  id: int().primaryKey(),
  cityId: int().references(() => cities.id).notNull(),
  name: text().unique().notNull(),
  slug: text().unique().notNull(),
  description: text(),
  imageUrl: text().notNull(),
})

export type Tour = typeof tours.$inferSelect
export type TourNew = typeof tours.$inferInsert

export const flights = sqliteTable('flights', {
  id: int().primaryKey(),
  tourId: int().references(() => tours.id).notNull(),
  departureCityId: int().references(() => cities.id).notNull(),
  departureDate: text({ length: 10 }).notNull(),
  arrivalDate: text({ length: 10 }).notNull(),
  price: int().notNull(),
})

export type Flight = typeof flights.$inferSelect
export type FlightNew = typeof flights.$inferInsert

export const reviews = sqliteTable('reviews', {
  id: int().primaryKey(),
  userId: int().notNull(),
  originCity: text().notNull(),
  arrivalCityId: int().references(() => cities.id).notNull(),
  text: text().notNull(),
})

export type Review = typeof reviews.$inferSelect
export type ReviewNew = typeof reviews.$inferInsert

export const userRelations = relations(users, ({ many }) => ({
  reviews: many(reviews),
}))

export const countryRelations = relations(countries, ({ many }) => ({
  cities: many(cities),
}))

export const cityRelations = relations(cities, ({ one, many }) => ({
  tours: many(tours),
  country: one(countries, {
    fields: [cities.countryId],
    references: [countries.id],
  })
}))

export const tourRelations = relations(tours, ({ one, many }) => ({
  flights: many(flights),
  city: one(cities, {
    fields: [tours.cityId],
    references: [cities.id],
  })
}))

export const flightRelations = relations(flights, ({ one, many }) => ({
  departureCity: one(cities, {
    fields: [flights.departureCityId],
    references: [cities.id],
  }),
  tour: one(tours, {
    fields: [flights.tourId],
    references: [tours.id],
  }),
}))

export const reviewRelations = relations(reviews, ({ one, many }) => ({
  user: one(users, {
    fields: [reviews.userId],
    references: [users.id],
  }),
  city: one(cities, {
    fields: [reviews.arrivalCityId],
    references: [cities.id],
  })
}))
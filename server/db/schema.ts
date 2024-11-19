import { relations, sql } from 'drizzle-orm'
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
export type UserDto = Omit<User, 'passwordHash'>

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
  priceDiscounted: int(),
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

export const orderItems = sqliteTable('order_items', {
  id: int().primaryKey(),
  userId: int().references(() => users.id).notNull(),
  flightId: int().references(() => flights.id).notNull(),
  orderId: int().references(() => orders.id).notNull(),
  price: int().notNull(),
  priceDiscounted: int(),
  quantity: int().notNull().default(1),
})

export type OrderItem = typeof orderItems.$inferSelect
export type OrderItemNew = typeof orderItems.$inferInsert

export const orders = sqliteTable('orders', {
  id: int().primaryKey(),
  userId: int().references(() => users.id).notNull(),
  createdAt: int({ mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
})

export type Order = typeof orders.$inferSelect
export type OrderNew = typeof orders.$inferInsert

export const cartItems = sqliteTable('cart_items', {
  id: int().primaryKey(),
  userId: int().references(() => users.id).notNull(),
  flightId: int().references(() => flights.id).notNull(),
  quantity: int().notNull().default(1),
})

export type CartItem = typeof cartItems.$inferSelect
export type CartItemNew = typeof cartItems.$inferInsert

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

export const orderItemRelations = relations(orderItems, ({ one, many }) => ({
  user: one(users, {
    fields: [orderItems.userId],
    references: [users.id],
  }),
  flight: one(flights, {
    fields: [orderItems.flightId],
    references: [flights.id],
  }),
}))

export const orderRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
  items: many(orderItems),
}))

export const cartRelations = relations(cartItems, ({ one, many }) => ({
  user: one(users, {
    fields: [cartItems.userId],
    references: [users.id],
  }),
  flights: many(flights),
}))
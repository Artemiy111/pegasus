import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dbCredentials: {
    url: 'db.sqlite3'
  },
  dialect: 'sqlite',
  out: './server/db/migrations',
  schema: './server/db/schema.ts',
  casing: 'snake_case',
})

import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export const PORT = process.env.PORT || 3000
export const DATABASE =
  process.env.DATABASE_URL || 'postgres://USER:PASSWORD@localhost:5432/DATABASE'
export const DATABASE_TEST =
  process.env.DATABASE_TEST ||
  'postgres://USER:PASSWORD@localhost:5432/DATABASE_TEST'
export const NODE_ENV = process.env.NODE_ENV || 'development'


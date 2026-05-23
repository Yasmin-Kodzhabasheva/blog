import dotenv from 'dotenv'
import { initDatabase } from './db/init.js'
import { app } from './app.js'

dotenv.config()

const PORT = process.env.PORT || 3001

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})

try {
  await initDatabase()
} catch (error) {
  console.error('Error initializing database:', error)
}

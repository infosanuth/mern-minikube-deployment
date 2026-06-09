import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './DBConnection.js'
import studentRouter from './StudentRoute.js'

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.send('Server is Live!')
})

app.use('/api/students', studentRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
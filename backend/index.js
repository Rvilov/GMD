import express from 'express'
import connectDB from './config/db.js'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 5000

// Conectar a la base de datos
connectDB()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

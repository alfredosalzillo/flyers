import express from 'express'
import cors from 'cors'
import { getFlyersHandler } from './api/flyers.js'

const {
  PORT = 8080
} = process.env;

const app = express()
app.use(cors())
app.get('/flyers/', getFlyersHandler)
app.listen(PORT, () => console.info(`server started on port ${ PORT }`))


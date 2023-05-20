import express, { json } from 'express'
import cors from 'cors'
import './loadEnvironment.mjs'
import routes from './routes/index.mjs'

const PORT = process.env.PORT || 5000
const app = express()

/* Configuration */
app.use(cors())
app.use(json())

/* Routes */
const path = '/api'
app.use(path, routes)

/* Start server */
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
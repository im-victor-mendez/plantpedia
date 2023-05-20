import express, { json } from 'express'
import cors from 'cors'
import './loadEnvironment.mjs'

const PORT = process.env.PORT || 5000
const app = express()

/* Configuration */
app.use(cors())
app.use(json())

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
const express = require("express")

require('dotenv').config()

const productRouter = require('./products/products.router')
const db = require('./utils/database')
const initModels = require('./models/initModels')

const { port } = require('../config')

const app = express()

db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))
db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))
initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Server OK'
    })
})

app.use('/api/v1/products', productRouter)


app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
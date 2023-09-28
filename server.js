const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
require('console')
const connectDb = require('./config/connectDb')

//config dot env file
dotenv.config();

//database call
connectDb();

const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
//user
app.use('/api/v1/users',require('./routes/userRoute'))

//transection
app.use('/api/v1/transections',require('./routes/transectionRoutes'))
//port
const PORT = 8080 || process.env.PORT

//listen
app.listen(PORT,()=>{
    console.log('server up at' +PORT)
})
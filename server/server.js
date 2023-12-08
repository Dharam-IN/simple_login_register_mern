const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const app = express();
require('./db/dbconn')
require('./models/userSchema')
const router = require('./router/router')

dotenv.config({path: '../.env'})
const PORT = process.env.PORT;

app.use(express.json())
app.use(cors())
app.use(router)

app.get('/', async(req, res)=>{
    res.status(201).json("Start");
})

app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`)
})

const express = require("express");
const dotenv = require("dotenv");
const cors = require("mongoose");
require('./db/dbconn')

const app = express();

dotenv.config({path: '../.env'})
const PORT = process.env.PORT;

// Server Start 
app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT}`);
})


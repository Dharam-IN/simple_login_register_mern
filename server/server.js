const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const router = require('./router/router');
require('./db/dbconn')


dotenv.config({path: '../.env'})
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(router);

// Server Start 
app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT}`);
})
 

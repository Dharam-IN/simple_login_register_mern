const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not valid mail")
            }
        }
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const userdb = mongoose.model('User', userSchema);

module.exports = userdb;

const mongoose = require('mongoose');
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
        validator(value){
            if(!validator.isEmail(value)){
                throw new error("Not Valid Email")
            }
        }
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const userdb = new mongoose.model('user', userSchema);

module.exports = userdb;

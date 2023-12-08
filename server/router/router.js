const express = require('express');
const userdb = require('../models/userSchema');
const router = new express.Router();


// register user
router.post('/register', async(req,res)=>{
    // console.log(req.body);
    const {fname, email, username, password} = req.body;

    if(!fname || !email || !username || !password){
        res.status(422).json({error: "Fill all fields"});
    };

    try {
        const preuser = await userdb.findOne({email: email});
        if(preuser){
            res.status(422).josn({error: "This Email already exist"})
        }else{
            const finaluser = new userdb({
                fname, email, username, password
            })

            const storedata = await finaluser.save();
            // console.log(storedata)
            res.status(201).json({status: 201, storedata})
        }
    } catch (error) {
        res.status(422).json(error);
        console.log("Catch block Error");
    }

})

// login user

router.post('/login', async(req, res)=>{
    // console.log(req.body)

    const {email, password} = req.body;

    if(!email || !password){
        res.status(422).json({error: "Fill All Fields"})
    }

    try {
        var userValid = await userdb.findOne({email: email});

        if(userValid){
            console.log("email match");
            const passmatch = await userdb.findOne({password: password});
            if(passmatch){
                console.log("You are loged in successful")
            }else{
                console.log("Chal na chutiye 🫸")
            }
        }else{
            console.log("Sorryyyyy 🤨")
        }
    } catch (error) {
        
    }
})

module.exports = router;
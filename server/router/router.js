const express = require('express');
const router = new express.Router();
const userdb = require('../models/userSchema')

router.post('/register', async(req, res)=>{
    const {fname, email, username, password} = req.body;

    if(!fname || !email || !username || !password){
        res.status(422).json({error: "Fill All Fields"})
    }

    try {
        const preuser = await userdb.findOne({email: email});

        if(preuser){
            res.status(422).json({error: "This Email Allready Exists"});
        }else{
            const fineluser = new userdb({
                fname, email, username, password
            })

            const storedata = await fineluser.save();
            console.log(storedata)
        }
    } catch (error) {
        res.status(422).json({error: "Error"})
    }

})

module.exports = router;
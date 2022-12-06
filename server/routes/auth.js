const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcrypt')


router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!email || !password ||!name){
        return res.json({err:"please Input all the information"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.json({err:"user already exist"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
    
            user.save()
            .then(user=>{
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })

    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router
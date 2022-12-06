const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('hello')
})

router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!email || !password ||!name){
        res.json({err:"please Input all the information"})
    }
    res.json({message:"successfully posted"})
})

module.exports = router
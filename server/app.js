const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')

app.use(cors());

require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))




mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongoose')
})
mongoose.connection.on('error', ()=>{
    console.log('err connecting', err)
})

app.listen(PORT,()=>{
    console.log('server is running on port',PORT)
})
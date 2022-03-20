const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const url = 'mongodb+srv://Nityasha_oob:nityasha1@cluster0.tw7fu.mongodb.net/todo?retryWrites=true&w=majority'

const app = express()
app.use(cors())
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})
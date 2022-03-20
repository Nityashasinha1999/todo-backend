const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({
    

    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Alien',alienSchema)
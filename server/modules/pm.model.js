const mongoose = require('mongoose')

const ProductManagerSchema = mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    }
},{timestamps:true})

const ProducManager = mongoose.model('ProductManager',ProductManagerSchema)

module.exports = ProducManager;
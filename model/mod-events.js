const mongoose = require("mongoose")
const Schema = mongoose.Schema
const db = require('../handlers/connectDb.js')

const eventSchema = new Schema(
{
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        require: true
    },
    personhost,
    place
})


const Events = db.mainDb.model('Events', eventSchema, 'events')
module.exports = Events
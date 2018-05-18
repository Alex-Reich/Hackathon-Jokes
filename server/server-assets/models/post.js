var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'Post'

var schema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
    body: {
        type: 'string',
        required: true,
    },
    imgUrl: {
        type: 'string',
    },
    author: {
        type: 'string',
        required: true
    },
    rating: {
        type: 'number',
        required: true
    }
})

module.exports = mongoose.model(schemaName, schema)
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'subcomment'

var schema = new Schema({
    body: {
        type: 'string',
        required: true,
    },
    imgUrl: {
        type: 'string',
    },
    user: {
        type: 'string',
        required: true
    },
    rating: {
        type: 'number',
    },

    // relationship
    userId:{
        type: ObjectId,
        ref: 'User',
        required: true
    },
    parentId: {
        type: ObjectId,
        ref: 'Comment',
        required: true
    }
})

module.exports = mongoose.model(schemaName, schema)
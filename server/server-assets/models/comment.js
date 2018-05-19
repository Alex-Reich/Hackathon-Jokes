var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'Comment'

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
    parentId: {
        type: ObjectId,
        ref: 'Post',
        required: true
 
    }
})

module.exports = mongoose.model(schemaName, schema)
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
        required: true
    },

    // relationship
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: ObjectId,
        ref: 'Post',
        required: true
    },
    commentId: {
        type: ObjectId,
        ref: 'Comment',
        required: true
    }
})

module.exports = mongoose.model(schemaName, schema)
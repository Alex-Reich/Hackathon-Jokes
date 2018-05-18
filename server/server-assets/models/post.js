var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId=Schema.Types.ObjectId
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
    user: {
        type: 'string',
        required: true
    },
    rating: {
        type: 'number',
    },

    // relationship
    userId: {
        type: ObjectId,
        ref: 'User',
        //required: true
    }
})
    
module.exports = mongoose.model(schemaName, schema)
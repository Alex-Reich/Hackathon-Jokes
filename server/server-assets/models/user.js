var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'User'

var schema = new Schema ({
    name: {
        type: 'string',
        required: true,
        unique: true
    }
})


module.exports = mongoose.model(schemaName, schema)
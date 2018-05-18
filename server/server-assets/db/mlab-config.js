var mongoose = require('mongoose')
var connnectionString = 'mongodb://student:student@ds014648.mlab.com:14648/hackathon-jokes'
var connection = mongoose.connection

mongoose.connect(connnectionString)

connection.on('error', err =>{
    console.log('ERROR FROM DATABASE', err)
})

connection.once('open', ()=>{
    console.log('Connected to database')
})
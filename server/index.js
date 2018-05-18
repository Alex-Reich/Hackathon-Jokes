var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

app.use(cors())
// fire up db connection

require('./server-assets/db/mlab-config')

// register middleware

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

// code above will never change

// routes
var users = require('./server-assets/routes/users')
var posts = require('./server-assets/routes/posts')
var comments = require('./server-assets/routes/comments')
var subcomments = require('./server-assets/routes/subcomments')


app.use(users.router)
app.use(posts.router)
app.use(comments.router)


// catch all
app.get('*', (req, res, next)=>{
    res.status(404).send({error: 'No matching routes'})
})

app.listen(port, ()=> {
console.log('server running on port', port)
})

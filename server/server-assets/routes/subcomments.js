var router = require('express').Router()
var Subcomments = require('../models/subcomment')

// Get all
router.get('/api/subcomments', (req, res, next)=>{
    Subcomments.find(req.query)
    .then(subcomments=>{
        res.status(200).send(subcomments)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

router.get('/api/subcomments/:id', (req, res, next)=>{
Subcomments.findById(req.params.id)
    .then(subcomments=>{
        res.status(200).send(subcomments)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

router.post('/api/subcomments', (req, res, next)=>{
    var subcomment = req.body
    Subcomments.create(subcomment)
    .then(newSubcomment=>{
        res.status(200).send(newSubcomment)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})


// edit
router.put('/api/subcomments/:id', (req, res, next)=>{
    Subcomments.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(subcomment=>{
        res.status(200).send({message: "Successfully Updated!", subcomment})
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

// delete
router.delete('/api/subcomments/:id', (req, res, next)=>{
    Subcomments.findByIdAndRemove(req.params.id)
    .then(data=>{
        res.send({message: "Successfully Delted!"})
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

module.exports = {
    router
}
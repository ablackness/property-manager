const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/', (req, res) => {
    db.User
    .findAll()
        .then(users => {
            res.status(200).json(users);
        })
})

router.post('/new', (req, res) => {
    db.User
    .create(req.body)
    .then(user => res.status(201).json(user));
})

router.put('/:id', (req, res) => {
    db.User
    .update(req.body, {
        where: {id: req.params.id}
    })
    .then(user => res.status(204).json(user));
})

router.delete('/:id', (req, res) => {
    db.User
    .findById(req.params.id)
    .then( user => user.destroy())
    .then( user => res.status(200).json(user));
})


module.exports = router;
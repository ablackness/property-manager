const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/', (req, res) => {
    db.Property
    .findAll()
        .then(properties => {
            res.status(200).json(properties);
        })
})

router.get('/state/:state', (req, res) => {
    db.Property
    .findAll({
        where: {
            state: req.params.state
        }
    })
    .then(properties => res.status(200).json(properties));
})

router.get('/zip/:zip', (req, res) => {
    db.Property
    .findAll({
        where: {
            zip: req.params.zip
        }
    })
    .then(properties => res.status(200).json(properties));
})

router.get('/city/:city', (req, res) => {
    db.Property
    .findAll({
        where: {
            city: req.params.city
        }
    })
    .then(properties => res.status(200).json(properties));
})

router.post('/new', (req, res) => {
    db.Property
    .create(req.body)
    .then(property => res.status(201).json(property));
})

router.put('/:id', (req, res) => {
    db.Property
    .update(req.body, {
        where: {id: req.params.id}
    })
    .then(property => res.status(204).json(property));
})

router.delete('/:id', (req, res) => {
    db.Property
    .findById(req.params.id)
    .then( property => property.destroy())
    .then( property => res.status(200).json(property));
})

module.exports = router;
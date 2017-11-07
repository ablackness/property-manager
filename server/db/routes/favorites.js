const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/', (req, res) => {
    db.Favorites
    .findAll()
        .then(favorites => {
            res.status(200).json(favorites);
        })
})

router.post('/', (req, res) => {
    db.Favorite
    .create(req.body)
    .then(favorite => res.status(201).json(favorite));
})

router.delete('/:id', (req, res) => {
    db.Favorite
    .findById(req.params.id)
    .then( favorite => favorite.destroy())
    .then( favorite => res.status(200).json(favorite));
})

module.exports = router;
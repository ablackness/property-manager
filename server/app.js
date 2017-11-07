const express = require('express');
const morgan = require('morgan');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require('./db/models');
db.sequelize.sync();

app.use(morgan('dev'));
// app
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(express.static('public'));

app.use('/api/users', require('./db/routes/users'));
app.use('/api/properties', require('./db/routes/properties'));

module.exports = app;
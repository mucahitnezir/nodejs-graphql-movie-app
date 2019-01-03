'use strict';

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.on('open', () => console.log('Connected to mongodb'));
connection.on('error', err => console.log(err));

module.exports = connection;

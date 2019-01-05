'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directorSchema = new Schema({
  name: String,
  birthDate: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;

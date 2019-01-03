'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  description: String,
  year: Number,
  directorId: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

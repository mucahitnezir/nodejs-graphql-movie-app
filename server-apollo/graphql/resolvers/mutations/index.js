'use strict';

const movieMutations = require('./movie.mutation');
const directorMutations = require('./director.mutation');

const mutations = {
  ...movieMutations,
  ...directorMutations
};

module.exports = mutations;

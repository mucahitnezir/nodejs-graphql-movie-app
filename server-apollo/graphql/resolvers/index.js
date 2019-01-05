'use strict';

// Query resolvers
const Director = require('./queries/Director');
const Movie = require('./queries/Movie');
const Query = require('./queries/Query');

// Mutation resolvers
const Mutation = require('./mutations');

const resolvers = {
  Query,
  Director,
  Movie,
  Mutation
};

module.exports = resolvers;

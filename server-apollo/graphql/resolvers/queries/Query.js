'use strict';

const _ = require('lodash');

const Query = {
  director: (parent, args, {db}) => _.find(db.directors, {id: args.id}),
  directors: (parent, args, {db}) => db.directors,
  movie: (parent, args, {db}) => _.find(db.movies, {id: args.id}),
  movies: (parent, args, {db}) => db.movies
};

module.exports = Query;

'use strict';

const _ = require('lodash');

const movieMutations = {
  addMovie: (parent, args, {db}) => {
    const director = _.some(db.directors, {id: args.data.directorId});
    if (!director) {
      throw new Error('Director does not exist.');
    }

    const movie = {
      id: Math.random().toString().substr(2, 10),
      ...args.data
    };
    db.movies.push(movie);
    return movie;
  }
};

module.exports = movieMutations;

'use strict';

const Movie = {
  director: (parent, args, {Director}) => {
    return Director.findById(parent.directorId);
  }
};

module.exports = Movie;

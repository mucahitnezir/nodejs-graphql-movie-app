'use strict';

const _ = require('lodash');

const directorMutations = {
  addDirector: (parent, args, {db}) => {
    const director = {
      id: Math.random().toString().substr(2, 10),
      ...args.data
    };
    db.directors.push(director);
    return director;
  }
};

module.exports = directorMutations;

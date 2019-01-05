'use strict';

const _ = require('lodash');

const Director = {
  movies: (parent, args, {db}) => _.filter(db.movies, {directorId: parent.id})
};

module.exports = Director;

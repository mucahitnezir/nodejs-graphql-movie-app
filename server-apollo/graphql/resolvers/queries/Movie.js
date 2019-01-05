'use strict';

const _ = require('lodash');

const Movie = {
  director: (parent, args, {db}) => _.find(db.directors, {id: parent.directorId})
};

module.exports = Movie;

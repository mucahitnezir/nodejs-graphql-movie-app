'use strict';

const Director = {
  movies: (parent, args, {Movie}) => {
    return Movie.find({directorId: parent.id});
  }
};

module.exports = Director;

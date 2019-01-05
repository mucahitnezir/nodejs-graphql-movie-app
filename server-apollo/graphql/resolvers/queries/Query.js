'use strict';

const Query = {
  director: (parent, args, {Director}) => {
    return Director.findById(args.id);
  },
  directors: (parent, args, {Director}) => {
    return Director.find({});
  },

  movie: (parent, args, {Movie}) => {
    return Movie.findById(args.id);
  },
  movies: (parent, args, {Movie}) => {
    return Movie.find({});
  }
};

module.exports = Query;

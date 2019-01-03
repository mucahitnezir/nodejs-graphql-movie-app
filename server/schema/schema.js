'use strict';

const graphql = require('graphql');
// const _ = require('lodash');

// const {movies, directors} = require('../data/fake-data');
const {Movie, Director} = require('../models');

const {GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLSchema} = graphql;

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: {type: GraphQLString},
    title: {type: GraphQLString, description: 'The title of the movie'},
    description: {type: GraphQLString},
    year: {type: GraphQLInt},
    director: {
      type: DirectorType,
      resolve: (parent, args) => {
        // return _.find(directors, {id: parent.directorId});
        return Director.findById(parent.directorId);
      }
    }
  })
});

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: {
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    birth: {type: GraphQLInt},
    movies: {
      type: new GraphQLList(MovieType),
      resolve: (parent, args) => {
        // return _.filter(movies, {directorId: parent.id});
        return Movie.find({directorId: parent.id});
      }
    }
  }
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    movie: {
      type: MovieType,
      args: {id: {type: GraphQLString}},
      resolve: (parent, args) => {
        // return _.find(movies, {id: args.id});
        return Movie.findById(args.id);
      }
    },
    director: {
      type: DirectorType,
      args: {id: {type: GraphQLString}},
      resolve: (parent, args) => {
        // return _.find(directors, {id: args.id});
        return Director.findById(args.id);
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve: (parent, args) => {
        // return movies;
        return Movie.find({});
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve: (parent, args) => {
        // return directors;
        return Director.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMovie: {
      type: MovieType,
      args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLString},
        year: {type: new GraphQLNonNull(GraphQLInt)},
        directorId: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve: (parent, args) => {
        const movie = new Movie({
          title: args.title,
          description: args.description,
          year: args.year,
          directorId: args.directorId
        });
        return movie.save();
      }
    },
    addDirector: {
      type: DirectorType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        birth: {type: GraphQLInt}
      },
      resolve: (parent, args) => {
        const director = new Director({
          name: args.name,
          birth: args.birth
        });
        return director.save();
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation
});

module.exports = schema;

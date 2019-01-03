'use strict';

const graphql = require('graphql');
const _ = require('lodash');

const {movies, directors} = require('../data/fake-data');

const {GraphQLID, GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLList, GraphQLSchema} = graphql;

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: {type: GraphQLID},
    title: {type: GraphQLString, description: 'The title of the movie'},
    description: {type: GraphQLString},
    year: {type: GraphQLInt},
    director: {
      type: DirectorType,
      resolve: (parent, args) => {
        return _.find(directors, {id: parent.directorId});
      }
    }
  })
});

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: {
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    birth: {type: GraphQLInt},
    movies: {
      type: new GraphQLList(MovieType),
      resolve: (parent, args) => {
        return _.filter(movies, {directorId: parent.id});
      }
    }
  }
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    movie: {
      type: MovieType,
      args: {id: {type: GraphQLID}},
      resolve: (parent, args) => {
        return _.find(movies, {id: args.id});
      }
    },
    director: {
      type: DirectorType,
      args: {id: {type: GraphQLID}},
      resolve: (parent, args) => {
        return _.find(directors, {id: args.id});
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve: (parent, args) => {
        return movies
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve: (parent, args) => {
        return directors
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQueryType
});

module.exports = schema;

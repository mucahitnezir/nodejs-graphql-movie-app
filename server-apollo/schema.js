'use strict';

const _ = require('lodash');
const {ApolloServer, gql} = require('apollo-server-express');

const {directors, movies} = require('./fake-data');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    director(id: ID!): Director
    directors: [Director!]!
    movie(id: ID!): Movie
    movies: [Movie!]!
  }
  
  type Mutation {
    addMovie(data: AddMovieInput!): Movie!
    addDirector(data: AddDirectorInput!): Director!
  }
  
  input AddMovieInput {
    title: String!
    description: String
    year: Int!
    directorId: String!
  }
  
  input AddDirectorInput {
    name: String!
    birth: Int
  }
  
  type Movie {
    id: ID!
    title: String!
    description: String
    year: Int!
    director: Director!
  }
  
  type Director {
    id: ID!
    name: String!
    birth: Int
    movies: [Movie!]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    director: (parent, args) => _.find(directors, {id: args.id}),
    directors: () => directors,
    movie: (parent, args) => _.find(movies, {id: args.id}),
    movies: () => movies
  },
  Mutation: {
    addDirector: (parent, args) => {
      const director = {
        id: Math.random().toString().substr(2, 10),
        ...args.data
      };
      directors.push(director);
      return director;
    },
    addMovie: (parent, args) => {
      const director = _.some(directors, {id: args.data.directorId});
      if (!director) {
        throw new Error('Director does not exist.');
      }

      const movie = {
        id: Math.random().toString().substr(2, 10),
        ...args.data
      };
      movies.push(movie);
      return movie;
    }
  },
  Movie: {
    director: (parent, args) => _.find(directors, {id: parent.directorId})
  },
  Director: {
    movies: (parent, args) => _.filter(movies, {directorId: parent.id})
  }
};

const server = new ApolloServer({typeDefs, resolvers});

module.exports = server;

'use strict';

const { importSchema } = require('graphql-import');
const { ApolloServer } = require('apollo-server-express');

// Fake data
// const db = require('../fake-data');
const db = require('../models');

// Type definitions and resolvers
const schemaPath = `${__dirname}/schema/schema.graphql`;
const typeDefs = importSchema(schemaPath);
const resolvers = require('./resolvers');

// Create server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    ...db
  }
});

module.exports = server;

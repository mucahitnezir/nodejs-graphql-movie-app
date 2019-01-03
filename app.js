'use strict';

const express = require('express');
const expressGraphQL = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

// GraphQL
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

module.exports = app;

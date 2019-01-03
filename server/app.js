'use strict';

const express = require('express');
const cors = require('cors');
const expressGraphQL = require('express-graphql');
const dotenv = require('dotenv').config();

const schema = require('./schema/schema');
const db = require('./database');

const app = express();

app.use(cors());

// GraphQL
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

module.exports = app;

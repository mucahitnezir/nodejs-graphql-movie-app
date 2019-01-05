'use strict';

const cors = require('cors');
const express = require('express');

// Process Environments
require('dotenv').config();

// Database
require('./database');

// Apollo GraphQL Server
const server = require('./graphql/server');

// Express
const app = express();

// Express app graphql configuration
app.use(cors());
server.applyMiddleware({app});

// Start express app
app.listen({port: 4000}, () => {
  console.log(`🚀Server ready at http://localhost:4000${server.graphqlPath}`);
});

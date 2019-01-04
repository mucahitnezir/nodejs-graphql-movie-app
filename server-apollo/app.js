'use strict';

const cors = require('cors');
const express = require('express');

const server = require('./schema');

const app = express();

app.use(cors());
server.applyMiddleware({app});

app.listen({port: 4000}, () => {
  console.log(`🚀Server ready at http://localhost:4000${server.graphqlPath}`);
});

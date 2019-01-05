'use strict';

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {useNewUrlParser: true})
  .then(() => console.log('Connected to mongodb'))
  .catch(err => console.log(err));

const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const { PubSub } = require('express-graphql')

const pubsub = new PubSub();

const app = express();

app.use(cors())

// Replace with your mongoLab URI
const MONGO_URI = 'mongodb://localhost:27017/lyricaldb';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

module.exports = app;

const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Song = mongoose.model('song');
const Lyric = mongoose.model('lyric');
const SongType = require('./song_type');
const LyricType = require('./lyric_type');

const subscriptions = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    song: {
      subscribe(parent, args, { pubsub }) {
        return pubsub.asyncIterator('song');
      }
    }
  }
});

module.exports = subscriptions;

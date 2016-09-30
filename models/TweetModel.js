const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  body: {
    type: String,
    required: true,
    default: ''
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Tweet', tweetSchema);

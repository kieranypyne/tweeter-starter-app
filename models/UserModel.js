const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  tweets: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Tweet'
  }]
  
});

module.exports = mongoose.model('User', userSchema);

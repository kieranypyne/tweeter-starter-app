const TweetModel = require('../models/TweetModel');

module.exports = {
  list(req, res, next) {
    TweetModel.find()
      .populate('user')
      .exec()
      .then(tweets => {
        return res.json(tweets);
      })
      .catch(err => {
        return next(err);
      });
  },

  show(req, res, next) {
    TweetModel.findById(req.params.id)
      .populate('user')
      .exec()
      .then(tweet => {
        return res.json(tweet);
      })
      .catch(err => {
        return next(err);
      });
  },

  create(req, res, next) {
    const { body, user } = req.body;
    new TweetModel({ body, user: user }).save()
      .then(tweet => {
        return res.json(tweet);
      })
      .catch(err => {
        return next(err);
      });
  }
}

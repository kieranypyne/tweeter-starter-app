const UserModel = require('../models/UserModel');
const TweetModel = require('../models/TweetModel');

module.exports = {
  list(req, res, next) {
    UserModel.find().exec()
      .then(users => {
        return res.json(users);
      })
      .catch(err => {
        return next(err);
      });
  },

  show(req, res, next) {
    let foundUser;
    UserModel.findById(req.params.id)
      .exec()
      .then(user => {
        foundUser = user;
        return TweetModel.find({ user: user._id }).exec();
      })
      .then(tweets => {
        foundUser.tweets = tweets;
        return res.json(foundUser);
      })
      .catch(err => {
        return next(err);
      });
  },

  create(req, res, next) {
    const { username } = req.body;
    new UserModel({ username }).save()
      .then(user => {
        return res.json(user);
      })
      .catch(err => {
        return next(err);
      });
  }
}

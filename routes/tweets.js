const express = require('express');
const router = express.Router();
const TweetsController = require('../controllers/TweetsController.js');

router.get('/', TweetsController.list);
router.get('/:id', TweetsController.show);
router.post('/', TweetsController.create);

module.exports = router;

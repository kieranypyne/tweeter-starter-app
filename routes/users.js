const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController.js');


/* GET users listing. */
router.get('/', UsersController.list);
router.get('/:id', UsersController.show);
router.post('/', UsersController.create);

module.exports = router;

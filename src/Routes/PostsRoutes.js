const express = require('express');
const router = express.Router();
const Controller = require('../Controllers/PostsController');

router.get('/pairs', Controller.pairs);
router.get('/', Controller.index);
router.get('/:id', Controller.show);
module.exports = router;
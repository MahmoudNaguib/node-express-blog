const express = require('express');
const router = express.Router();
const Controller = require('../Controllers/SectionsController');

router.get('/', Controller.index);
router.post('/', Controller.store);
router.get('/:id', Controller.show);
router.delete('/:id', Controller.delete);
router.put('/:id', Controller.update);

module.exports = router;
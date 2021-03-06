const express = require('express');
const router = express.Router();
const Controller = require('../../Controllers/Admin/AdminSectionsController');

router.get('/pairs', Controller.pairs);
router.get('/', Controller.index);
router.post('/', Controller.store);
router.get('/:id', Controller.show);
router.delete('/:id', Controller.delete);
router.put('/:id', Controller.update);

module.exports = router;
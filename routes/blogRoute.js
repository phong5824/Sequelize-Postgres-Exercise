const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.blogs);
router.get('/:id', controller.blogDetail);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controllers/cities.controller');

router.get('/', controller.getCities)

router.get('/:id', controller.getCityById)

module.exports = router;
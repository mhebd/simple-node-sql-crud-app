const express = require('express');
const {
	createResult,
	findResults,
	findOneResult,
	updateResult,
	deleteResult,
} = require('../controller/result');
const router = express.Router();

router.route('/').get(findResults).post(createResult);

router.route('/:reg').get(findOneResult).put(updateResult).delete(deleteResult);

module.exports = router;

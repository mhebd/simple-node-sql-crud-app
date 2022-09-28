const express = require('express');
const {
	createSalary,
	findSalarys,
	findOneSalary,
	updateSalary,
	deleteSalary,
} = require('../controller/salary');
const router = express.Router();

router.route('/').get(findSalarys).post(createSalary);

router.route('/:id').get(findOneSalary).put(updateSalary).delete(deleteSalary);

module.exports = router;

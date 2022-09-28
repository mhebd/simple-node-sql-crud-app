const express = require('express');
const {
	createStudent,
	findStudents,
	findOneStudent,
	updateStudent,
	deleteStudent,
} = require('../controller/student');
const router = express.Router();

router.route('/').get(findStudents).post(createStudent);

router
	.route('/:id')
	.get(findOneStudent)
	.put(updateStudent)
	.delete(deleteStudent);

module.exports = router;

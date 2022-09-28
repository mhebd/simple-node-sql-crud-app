const express = require('express');
const {
	createStudent,
	findStudents,
	findOneStudent,
	updateStudent,
	deleteStudent,
	studentDetails,
} = require('../controller/student');
const router = express.Router();

router.route('/').get(findStudents).post(createStudent);

router.route('/details/:id').get(studentDetails);

router
	.route('/:id')
	.get(findOneStudent)
	.put(updateStudent)
	.delete(deleteStudent);

module.exports = router;

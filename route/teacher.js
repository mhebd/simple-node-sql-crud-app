const express = require('express');
const {
	createTeacher,
	findTeachers,
	findOneTeacher,
	updateTeacher,
	deleteTeacher,
	teacherDetails,
} = require('../controller/teacher');
const router = express.Router();

router.route('/').get(findTeachers).post(createTeacher);

router.route('/details/:id').get(teacherDetails);

router
	.route('/:id')
	.get(findOneTeacher)
	.put(updateTeacher)
	.delete(deleteTeacher);

module.exports = router;

const express = require('express');
const { createTeacher, findTeachers, findOneTeacher } = require('../controller/teacher');
const router = express.Router();

router.route('/').get(findTeachers).post(createTeacher);

router.route('/:id').get(findOneTeacher);

module.exports = router;
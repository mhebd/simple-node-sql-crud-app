const express = require('express');
const {createStudent, findStudents, findOneStudent} = require('../controller/student');
const router = express.Router();

router.route('/').get(findStudents).post(createStudent);

router.route('/:id').get(findOneStudent);

module.exports = router;
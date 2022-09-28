const Teacher = require('../query/teacher');
const asyncHdl = require('../utility/asyncHdl');
const errMsg = require('../utility/errMsg');

// Create a new teacher
exports.createTeacher = asyncHdl(async (req, res, next) => {
	const { name, age, phone, course, address } = req.body;

	const teacher = new Teacher(name, age, phone, course, address);

	await teacher.create();

	console.log(teacher);

	res.status(201).json({
		success: true,
		message: 'Student created success',
		teacher,
	});
});

// Get all teachers
exports.findTeachers = asyncHdl(async (req, res, next) => {
	const teachers = await Teacher.findAll();

	res.status(200).json({
		success: true,
		message: '',
		teachers: teachers[0],
	});
});

// Get a single teacher
exports.findOneTeacher = asyncHdl(async (req, res, next) => {
	const { id } = req.params;

	const teacher = await Teacher.findOne(id);

	if (teacher[0].length <= 0) {
		return next(new errMsg(`Teacher not found with id ${id}`, 404));
	}

	res.status(200).json({
		success: true,
		message: '',
		teacher: teacher[0][0],
	});
});

// Update a single teacher
exports.updateTeacher = asyncHdl(async (req, res, next) => {
	const { id } = req.params;

	const hasTeacher = await Teacher.findOne(id);

	if (hasTeacher[0].length <= 0) {
		return next(new errMsg(`Teacher on id ${id} is not found!`, 404));
	}

	const { name, age, phone, course, address } = req.body;

	const teacher = new Teacher(name, age, phone, course, address);

	await teacher.updateOne(id);

	res.status(200).json({
		success: true,
		message: 'Teacher updated successful.',
		teacher,
	});
});

// Delete a teacher
exports.deleteTeacher = asyncHdl(async (req, res, next) => {
	const { id } = req.params;

	const hasTeacher = await Teacher.findOne(id);

	if (hasTeacher[0].length <= 0) {
		return next(new errMsg(`Teacher on id ${id} is not found!`, 404));
	}

	const teacher = await Teacher.deleteOne(id);

	res.status(200).json({
		success: true,
		message: 'Teacher deleted successful.',
		teacher,
	});
});

const Student = require('../query/student');
const asyncHdl = require('../utility/asyncHdl');
const errMsg = require('../utility/errMsg');


// Create a new student
exports.createStudent = asyncHdl(async (req, res, next) => {
	const {name, age, phone, department, address} = req.body;

	const student = new Student(name, age, phone, department, address);

	await student.create();

	console.log(student);

	res.status(201).json({
		success: true,
		message: 'Student created success',
		student
	});
});


// Get all students
exports.findStudents = asyncHdl(async (req, res, next) => {
	const students = await Student.findAll();

	res.status(200).json({
		success: true,
		message: '',
		students: students[0]
	})
});


// Get a single student
exports.findOneStudent = asyncHdl(async (req, res, next) => {
	const {id} = req.params;

	const student = await Student.findOne(id);

	if(student[0].length <= 0) {
		return next(new errMsg(`Student not found with id ${id}`, 404));
	};

	res.status(200).json({
		success: true,
		message: '',
		student: student[0][0]
	})
});
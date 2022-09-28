const Salary = require('../query/salary');
const asyncHdl = require('../utility/asyncHdl');
const errMsg = require('../utility/errMsg');

// Create a new salary
exports.createSalary = asyncHdl(async (req, res, next) => {
	const { teacherId, base } = req.body;

	const salary = new Salary(teacherId, base);

	await salary.create();

	console.log(salary);

	res.status(201).json({
		success: true,
		message: 'Salary created successful',
		salary,
	});
});

// Get all salarys
exports.findSalarys = asyncHdl(async (req, res, next) => {
	const salarys = await Salary.findAll();

	res.status(200).json({
		success: true,
		message: '',
		salarys: salarys[0],
	});
});

// Get a single salary
exports.findOneSalary = asyncHdl(async (req, res, next) => {
	const { id } = req.params;

	const salary = await Salary.findOne(id);

	if (salary[0].length <= 0) {
		return next(new errMsg(`Salary not found with id ${id}`, 404));
	}

	res.status(200).json({
		success: true,
		message: '',
		salary: salary[0][0],
	});
});

// Update a single salary
exports.updateSalary = asyncHdl(async (req, res, next) => {
	const { id } = req.params;

	const hasSalary = await Salary.findOne(id);

	if (hasSalary[0].length <= 0) {
		return next(new errMsg(`Salary on id ${id} is not found!`, 404));
	}

	const { teacherId, base } = req.body;

	const salary = new Salary(teacherId, base);

	await salary.updateOne(id);

	res.status(200).json({
		success: true,
		message: 'Salary updated successful.',
		salary,
	});
});

// Delete a salary
exports.deleteSalary = asyncHdl(async (req, res, next) => {
	const { id } = req.params;

	const hasSalary = await Salary.findOne(id);

	if (hasSalary[0].length <= 0) {
		return next(new errMsg(`Salary on id ${id} is not found!`, 404));
	}

	const salary = await Salary.deleteOne(id);

	res.status(200).json({
		success: true,
		message: 'Salary deleted successful.',
		salary,
	});
});

const Result = require('../query/result');
const asyncHdl = require('../utility/asyncHdl');
const errMsg = require('../utility/errMsg');

// Create a new result
exports.createResult = asyncHdl(async (req, res, next) => {
	const { gpa, grade, studentId } = req.body;

	const result = new Result(gpa, grade, studentId);

	await result.create();

	console.log(result);

	res.status(201).json({
		success: true,
		message: 'Result created success',
		result,
	});
});

// Get all results
exports.findResults = asyncHdl(async (req, res, next) => {
	const results = await Result.findAll();

	res.status(200).json({
		success: true,
		message: '',
		results: results[0],
	});
});

// Get a single result
exports.findOneResult = asyncHdl(async (req, res, next) => {
	const { reg } = req.params;

	const result = await Result.findOne(reg);

	if (result[0].length <= 0) {
		return next(new errMsg(`Result on registration ${reg} is not found!`, 404));
	}

	res.status(200).json({
		success: true,
		message: '',
		result: result[0][0],
	});
});

// Update a single result
exports.updateResult = asyncHdl(async (req, res, next) => {
	const { reg } = req.params;

	const hasResult = await Result.findOne(reg);

	if (hasResult[0].length <= 0) {
		return next(new errMsg(`Result on registration ${reg} is not found!`, 404));
	}

	const { gpa, grade, studentId } = req.body;

	const result = new Result(gpa, grade, studentId);

	await result.updateOne(reg);

	res.status(200).json({
		success: true,
		message: 'Document updated successful.',
		result,
	});
});

// Delete a result
exports.deleteResult = asyncHdl(async (req, res, next) => {
	const { reg } = req.params;

	const hasResult = await Result.findOne(reg);

	if (hasResult[0].length <= 0) {
		return next(new errMsg(`Result on registration ${reg} is not found!`, 404));
	}

	const result = await Result.deleteOne(reg);

	res.status(200).json({
		success: true,
		message: 'Result deleted successful.',
		result,
	});
});

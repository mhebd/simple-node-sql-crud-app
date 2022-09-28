const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const error = require('./middleware/error');
require('dotenv').config({ path: './config/.env' });
// // // // // // // // // // // // //
const studentRoute = require('./route/student');
const teacherRoute = require('./route/teacher');
const resultRoute = require('./route/result');
const salaryRoute = require('./route/salary');

// Create server instance
const app = express();

// User middlesare
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));

// Use router
app.use('/api/v1/student', studentRoute);
app.use('/api/v1/teacher', teacherRoute);
app.use('/api/v1/result', resultRoute);
app.use('/api/v1/salary', salaryRoute);

// Test endpoint
app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Hello Developer!',
	});
});

app.use(error);

module.exports = app;

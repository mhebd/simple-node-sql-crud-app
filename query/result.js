const db = require('../db/db');

class Result {
	constructor(gpa, grade, studentId) {
		this.gpa = gpa;
		this.grade = grade;
		this.studentId = studentId;
	}

	// Create a student result
	create() {
		return db.execute(
			`INSERT INTO Results (GPA, Grade, StudentID) VALUES (?, ?, ?)`,
			[this.gpa, this.grade, this.studentId]
		);
	}

	// Find all result
	static findAll() {
		return db.execute(`SELECT * FROM Results`);
	}

	// Find a single result
	static findOne(reg) {
		return db.execute(`SELECT  * FROM Results WHERE RegNumber = ${reg}`);
	}

	// Update a single result
	updateOne(reg) {
		db.execute(
			`UPDATE Results SET GPA=?, Grade=?, StudentID=? WHERE RegNumber = ${reg}`,
			[this.gpa, this.grade, this.studentId]
		);
	}

	// Delete a single result
	static deleteOne(reg) {
		return db.execute(`DELETE FROM Results WHERE RegNumber = ${reg}`);
	}
}

module.exports = Result;

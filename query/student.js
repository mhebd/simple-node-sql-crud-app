const db = require('../db/db');

class Student {
	constructor(name, age, phone, department, address) {
		this.name = name;
		this.age = age;
		this.phone = phone;
		this.department = department;
		this.address = address;
	}

	// Create a new student
	create() {
		return db.execute(
			`INSERT INTO Students (Name, Age, Phone, Department, Address) VALUES (?, ?, ?, ?, ?)`,
			[this.name, this.age, this.phone, this.department, this.address]
		);
	}

	// Find all student
	static findAll() {
		return db.execute(`SELECT * FROM Students`);
	}

	// Find a single student
	static findOne(id) {
		return db.execute(`SELECT  * FROM Students WHERE StudentID = ${id}`);
	}

	// Update a single student
	updateOne(id) {
		db.execute(
			`UPDATE Students SET Name=?, Age=?, Phone=?, Department=?, Address=? WHERE StudentID = ${id}`,
			[this.name, this.age, this.phone, this.department, this.address]
		);
	}

	// Delete a single student
	static deleteOne(id) {
		return db.execute(`DELETE FROM Students WHERE StudentID = ${id}`);
	}

	// Get student full information
	static studentDetails(id) {
		return db.execute(
			`SELECT * FROM Students INNER JOIN Results WHERE Students.StudentID = ${id} AND Results.StudentID = ${id}`
		);
	}
}

module.exports = Student;

const db = require('../db/db');

class Teacher {
	constructor(name, age, phone, course, address) {
		this.name = name;
		this.age = age;
		this.phone = phone;
		this.course = course;
		this.address = address;
	}

	// Create a teacher
	create() {
		return db.execute(
			`INSERT INTO Teachers (Name, Age, Phone, Course, Address) VALUES (?, ?, ?, ?, ?)`,
			[this.name, this.age, this.phone, this.course, this.address]
		);
	}

	// Find all teacher
	static findAll() {
		return db.execute(`SELECT * FROM Teachers`);
	}

	// Find a single teacher
	static findOne(id) {
		return db.execute(`SELECT  * FROM Teachers WHERE TeacherID = ${id}`);
	}

	// Update a single student
	updateOne(id) {
		db.execute(
			`UPDATE Teachers SET Name=?, Age=?, Phone=?, Course=?, Address=? WHERE TeacherID = ${id}`,
			[this.name, this.age, this.phone, this.course, this.address]
		);
	}

	// Delete a single student
	static deleteOne(id) {
		return db.execute(`DELETE FROM Teachers WHERE TeacherID = ${id}`);
	}
}

module.exports = Teacher;

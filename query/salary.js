const db = require('../db/db');

class Salary {
	constructor(teacherId, base) {
		this.teacherId = teacherId;
		this.base = base;
		this.homeRent = (base * 25) / 100;
		this.medicle = base >= 20000 ? 1000 : 500;
		this.total = this.base + this.homeRent + this.medicle;
	}

	// Create a teacher
	create() {
		return db.execute(
			`INSERT INTO Salarys (TeacherID, Base, HomeRent, Medicle, Total) VALUES (?, ?, ?, ?, ?)`,
			[this.teacherId, this.base, this.homeRent, this.medicle, this.total]
		);
	}

	// Find all teacher
	static findAll() {
		return db.execute(`SELECT * FROM Salarys`);
	}

	// Find a single teacher
	static findOne(id) {
		return db.execute(`SELECT  * FROM Salarys WHERE ID = ${id}`);
	}

	// Update a single student
	updateOne(id) {
		db.execute(
			`UPDATE Salarys SET TeacherID=?, Base=?, HomeRent=?, Medicle=?, Total=? WHERE ID = ${id}`,
			[this.teacherId, this.base, this.homeRent, this.medicle, this.total]
		);
	}

	// Delete a single student
	static deleteOne(id) {
		return db.execute(`DELETE FROM Salarys WHERE ID = ${id}`);
	}
}

module.exports = Salary;

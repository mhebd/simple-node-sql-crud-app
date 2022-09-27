const db = require('../db/db');

class Student {
	constructor(name, age, phone, department, address) {
		this.name = name;
		this.age = age;
		this.phone = phone;
		this.department = department;
		this.address = address;
	};

	create() {
		return db.execute(`INSERT INTO Students (Name, Age, Phone, Department, Address) VALUES (?, ?, ?, ?, ?)`, [this.name, this.age, this.phone, this.department, this.address]);
	};

	static findAll() {
		return db.execute(`SELECT * FROM Students`);
	};

	static findOne(id) {
		return db.execute(`SELECT  * FROM Students WHERE StudentID = ${id}`);
	};

};


module.exports = Student;

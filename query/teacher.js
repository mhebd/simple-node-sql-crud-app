const db = require('../db/db');

class Teacher {
	constructor(name, age, phone, course, address) {
		this.name = name;
		this.age = age;
		this.phone = phone;
		this.course = course;
		this.address = address;
	};

	create() {
		return db.execute(`INSERT INTO Teachers (Name, Age, Phone, Course, Address) VALUES (?, ?, ?, ?, ?)`, [this.name, this.age, this.phone, this.course, this.address]);
	};

	static findAll() {
		return db.execute(`SELECT * FROM Teachers`);
	};

	static findOne(id) {
		return db.execute(`SELECT  * FROM Teachers WHERE TeacherID = ${id}`);
	};

};


module.exports = Teacher;

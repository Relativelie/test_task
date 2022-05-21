const db = require('../db');

class StudentController {
    async createStudent(req, res) {
        const {
            name, surname, midname, birthday, trainingGroup,
        } = req.body;
        const newStudent = await db.query(
            'INSERT INTO students (name, surname, midname, birthday, trainingGroup) values ($1, $2, $3, $4, $5) RETURNING * ',
            [name, surname, midname, birthday, trainingGroup],
        );
        res.json(newStudent);
    }

    async deleteStudent(req, res) { }

    async getStudents(req, res) { }
}

module.exports = new StudentController();

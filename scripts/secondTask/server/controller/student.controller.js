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
        res.json(newStudent.rows[0]);
    }

    async deleteStudent(req, res) {
        const { id } = req.params;
        const student = await db.query('DELETE FROM students where id = $1', [id]);
        res.json(student.rows[0]);
    }

    async getStudents(req, res) {
        const students = await db.query('SELECT * FROM students');
        res.json(students.rows);
    }
}

module.exports = new StudentController();

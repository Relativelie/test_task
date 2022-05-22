const db = require('../db');

class StudentController {
    async createStudent(req, res) {
        const {
            name, surname, midname, birthday, traininggroup,
        } = req.body;
        const newStudent = await db.query(
            'INSERT INTO students (name, surname, midname, birthday, traininggroup) values ($1, $2, $3, $4, $5) RETURNING * ',
            [name, surname, midname, birthday, traininggroup],
        );
        res.json({ result: '200 OK', created: newStudent.rows[0] });
    }

    async deleteStudent(req, res) {
        const { id } = req.params;
        const student = await db.query('DELETE FROM students where id = $1', [id]);
        res.json({ result: '200 OK', students: student.rows[0] });
    }

    async getStudents(req, res) {
        const students = await db.query('SELECT id, name, surname, midname, birthday::text, traininggroup FROM students');
        res.json({ result: '200 OK', students: students.rows });
    }
}

module.exports = new StudentController();

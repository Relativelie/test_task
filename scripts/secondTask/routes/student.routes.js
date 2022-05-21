const Router = require('express');

const router = new Router();

const studentController = require('../controller/student.controller');

router.post('/student', studentController.createStudent);
router.delete('/student/:id', studentController.deleteStudent);
router.get('/students', studentController.getStudents);

module.exports = router;

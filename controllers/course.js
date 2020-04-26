const Course = require('../models/Course');

function addCourse(req, res) {
    const body = req.body;
    const course = new Course(body);
    course.order = 1000;

    course.save((err, courseStored) => {
        if (err) {
            res.status(500).send({ code: 500, message: 'El curso que estas creando ya existe' });
        } else {
            if (!courseStored) {
                res.status(400).send({ code: 400, message: 'No se ja podido crear el curso' });
            } else {
                res.status(200).send({ code: 200, message: 'Curso creado correctamente' });
            }
        }
    });
}

module.exports = {
    addCourse
};
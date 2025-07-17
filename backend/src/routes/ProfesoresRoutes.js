const express = require('express');
const router = express.Router();
const ProfesorController = require('../controllers/ProfesorController');

router.get('/', ProfesorController.getProfesores); // Obtener todos los profesores
router.post('/', ProfesorController.addProfesor); // Crear profesor nuevo
router.delete('/', ProfesorController.deleteProfesor); // Eliminar profesor por ID
router.put('/:id', ProfesorController.updateProfesor); // Actualizar profesor por ID

module.exports = router;

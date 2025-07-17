// Importamos Express
const express = require('express');

// Funcion para crear módulos de rutas independientes y organizadas.
// Permite la reutilización de las rutas
//Facilita la asignación de prefijos
const router = express.Router();

// Importamos los Controladores
const CursoController = require('../controllers/CursoController');

router.get('/', CursoController.getCurso); // Obtener todos los cursos
router.post('/', CursoController.addCurso); // Crear curso nuevo
router.delete('/:id', CursoController.deleteCurso); // Eliminar curso por ID
router.put('/', CursoController.updateCurso); // Actualizar curso por ID

module.exports = router;
// Importamos Express
const express = require('express');

// Funcion para crear módulos de rutas independientes y organizadas.
// Permite la reutilización de las rutas
//Facilita la asignación de prefijos
const router = express.Router();

// Importamos los Controladores
const EstudianteController = require('../controllers/EstudianteController');

router.get('/', EstudianteController.getEstudiante);
router.post('/', EstudianteController.addEstudiante);
router.put('/', EstudianteController.updateEstudiante);
router.delete('/:id', EstudianteController.deleteEstudiante);

module.exports = router;

// Error 'Argument handler must be a function' son las definiciones de las rutas
// Controller.method() significa que estoy llamando a una funcion inmediatamente (Con los ())
// Cuando debo pasar la referencia.
// El error aparecera la direccion del router y un [as get] cuando se refiere a el problema mencionado


// Error 'Argument handler must be a function' y dice Function.use(.../application.js:numeros) y
// Object.<anonymous> (.../app.js:nums)
// Se refiere a que no exportamos los routers
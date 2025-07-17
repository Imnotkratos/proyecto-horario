const express = require('express');
const cors = require('cors');
const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// HOST
const HOST = process.env.HOST;

// Configuración básica
app.use(cors()); // CORS simple para desarrollo
app.use(express.json()); // Para parsear JSON

// Importar rutas
const CursosRoutes = require('./src/routes/CursosRoutes');
const EstudianteRoutes = require('./src/routes/EstudianteRoutes');
const ProfesoresRoutes = require('./src/routes/ProfesoresRoutes');
const HorarioRoutes = require('./src/routes/HorarioRoutes');

// Ruta para verificar que corra
app.use('/health-check', (req,res)=>{
  res.status(200).json({message:`Servidor funcionando en ${PORT}`});
});

// Rutas básicas
app.use('/cursos', CursosRoutes);
app.use('/estudiantes', EstudianteRoutes);
app.use('/profesores', ProfesoresRoutes);
app.use('/horarios', HorarioRoutes);

// Ruta de prueba simple
app.get('/', (req, res) => {
  res.send('API de Gestión Escolar');
});

// Manejo básico de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Algo salió mal');
});

// Iniciar servidor
app.listen(PORT, () => 
  console.log(`Servidor funcionando en http://127.0.0.1:${PORT}`));

// Error comun que tuve, las rutas estaban antes de la declaración el PORT 
// Ese es el motivo del pq salia el error o el rechazo http

// Logre conectar y editar correctamente la db en myphpadmin usando XAMPP
// Logre conectarlo sin XAMPP usando MySQL WorkBench
const pool = require('../config/db')

// Usamos async await para esperar la ejecucion de la query
// En la base de datos

// Creamos los modelos
// Get
const getEstudiante = async()=>{
    const [rows] = await pool.query(
        'SELECT * FROM Estudiante'
    );
    return rows;
};

// Put
const createEstudiante = async(FirstName, LastName, EmailAcad, password)=>{
    const [result] = await pool.query(
        'INSERT INTO Estudiante (FirstName, LastName, EmailAcar, password) VALUES (?,?,?,?)',
        [FirstName, LastName, EmailAcad, password]
    );
    return result.insertId;
};

// Detele
const deleteEstudiante = async(EstudianteID)=>{
    const [result] = await pool.query(
        'DELETE FROM Estudiante WHERE EstudianteID = ?',
        [EstudianteID]
    );
    return result.affectedRows > 0;
};

// Update
const updateEstudiante = async(EstudianteID, FirstName, LastName, EmailAcad, password)=>{
    const [result] = await pool.query(
        'UPDATE Estudiante SET FirstName = ?, LastName = ?, EmailAcad = ?, password = ? WHERE EstudianteID = ?',
        [FirstName, LastName, EmailAcad, password, EstudianteID]
    );
    return result.affectedRows > 0 ? {message: 'Estudiante actualizado exitosamente'} : {message: 'No se encontró el estudiante con ese ID'};;
};

module.exports = {getEstudiante, createEstudiante, deleteEstudiante, updateEstudiante};
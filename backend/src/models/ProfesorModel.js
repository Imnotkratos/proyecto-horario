const pool = require('../config/db');

const getProfesores = async () => {
    const [rows] = await pool.query('SELECT * FROM Profesores');
    return rows;
};

const createProfesor = async(FirstName, LastName, EmailAcad,password)=>{
    const [result] = await pool.query(
        'INSERT INTO Profesores(FirstName, LastName, EmailAcad,password) VALUES (?,?,?,?)',
        [FirstName, LastName, EmailAcad,password]
    );
    // Revisa si la inserción fue exitosa
    return result.insertId;
};

const deleteProfesor = async(ProfesoresID)=>{
    const [result] = await pool.query(
        'DELETE FROM Profesores WHERE ProfesoresID = ?',
        [ProfesoresID]
    )
    return result.affectedRows > 0;
};

const updateProfesor = async(ProfesoresID, FirstName,LastName,EmailAcad, password) =>{
    const [result] = await pool.query(
        'UPDATE Profesores SET FirstName = ?, LastName = ?, EmailAcad = ?, password = ? WHERE ProfesoresID = ?',
        [ProfesoresID, FirstName, LastName, EmailAcad, password]
    );
    return result.affectedRows > 0 ? {message: 'Profesor actualizado exitosamente'} : {message: 'No se encontró el profesor con ese ID'};
};

module.exports = {getProfesores, createProfesor, deleteProfesor, updateProfesor};
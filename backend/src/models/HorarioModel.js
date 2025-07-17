const { get } = require('config');
const pool = require('../config/db');


// insertId
// affectedRows
// condicion ? True : False

const getHorario = async()=>{
    const [rows] = await pool.query(
        "SELECT h.HorarioID,concat(e.Firstname, ' ', e.LastName) AS FullName_Estudiante, CONCAT(p.FirstName, ' ', p.LastName) AS Fullname_Profesor, c.HoraInicio, c.HoraFinal FROM Horario h JOIN Curso c ON h.CursoID = c.CursoID JOIN Estudiante e ON h.EstudianteID = e.EstudianteID JOIN profesores p ON h.ProfesoresID = p.ProfesoresID"
    );
    return rows;
};

const createHorario = async(CursoID, ProfesoresID, EstudianteID)=>{
    const [result] = await pool.query(
        'INSERT INTO Horario (CursoID, ProfesoresID, EstudianteID) values (?,?,?)',
        [CursoID, ProfesoresID, EstudianteID]
    );
    return result.insertId
};

const updateHorario = async(HorarioID, CursoID, ProfesoresID, EstudianteID)=>{
    const [result] = await pool.query(
        'update Horario set HorarioID = ?, CursoID = ?, ProfesoresID = ?, EstudianteID = ?',
        [HorarioID, CursoID, ProfesoresID, EstudianteID]
    );
    return result.affectedRows > 0;
};

const deleteHorario = async(HorarioID)=>{
    const [result] = await pool.query(
        'delete from horario where HorarioID = ?',
        [HorarioID]
    );
    return result.affectedRows > 0 ? {message:'Horario eliminado correctamente'} : {message: 'No se pudo eliminar el Horario'};
};

module.exports = {getHorario,createHorario,updateHorario,deleteHorario};
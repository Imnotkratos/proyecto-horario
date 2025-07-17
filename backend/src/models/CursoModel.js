const pool = require('../config/db');

const getCurso = async()=>{
    const [rows] = await pool.query(
        'select c.CursoName, i.IdiomaCurso, d.Dia, c.HoraInicio, c.HoraFinal from Curso c join Idioma i on c.IdiomaID = i.IdiomaID join dias_semana d on c.DiaID = d.DiaID;'
    );
    return rows;
};

const createCurso = async(CursoName,IdiomaID, DiaID) => {
    const [result] = await pool.query(
        'INSERT INTO Curso (CursoName,IdiomaID,DiaID) VALUES(?,?,?)',
        [CursoName, IdiomaID, DiaID]
    );
    // Verifica si la inserción fue exitosa
    return result.insertId;
};

const deleteCurso = async(CursoID) => {
    const [result] = await pool.query(
        'DELETE FROM Curso WHERE CursoID = ?',
        [CursoID]
    );
    return result.affectedRows > 0;
};

const updateCurso = async(CursoID, CursoName, IdiomaID, DiaID) => {
    const [result] = await pool.query(
        'UPDATE Curso SET CursoName = ?, IdiomaID = ?, DiaID = ? WHERE CursoID = ?',
        [CursoName, IdiomaID, DiaID, CursoID]
    );
    return result.affectedRows > 0 ? {message: 'Curso actualizado exitosamente'} : {message: 'No se encontró el curso con ese ID'};
};


module.exports = {getCurso, createCurso, deleteCurso, updateCurso}
const CursoModel = require('../models/CursoModel');

const getCurso = async(req,res) => {
    // Manejo de errores
    try{
        const curso = await CursoModel.getCurso();
        res.json(curso);
    }
    catch(error){
        res.status(500).json({error: 'Error al obtener los cursos'});
    }
};

const addCurso = async(req,res) => {
    // Obtenemos el Nombre, Idioma y dia
    const {CursoName, IdiomaID, DiaID} = req.body;
    
    // Manejo de errores
    try{
        const result = await CursoModel.createCurso(CursoName,IdiomaID,DiaID);
        res.json(...result)
    }
    catch(error){
        res.status(500).json({error: 'Error al obtener los cursos'});
    }
};

const deleteCurso = async(req,res) => {
    // Obtenemos el ID del curso
    const {CursoID} = req.body;

    // Manejo de errores
    try{
        const result = await CursoModel.deleteCurso(CursoID);
        res.status(200).json(...result, {message: 'Curso eliminado correctamente'});
    }
    catch(error){
    res.status(500).json({error: 'Error al obtener los profesores'});
    }
};

const updateCurso = async(req,res) => {
    // Obtenemos los datos
    const {CursoID, CursoName, IdiomaID, DiaID} = req.body;

    // Manejo de errores
    try{
        const result = await CursoModel.updateCurso(CursoID, CursoName, IdiomaID,DiaID);
        res.json(...result)
    }
    catch(error){
        res.status(500).json({error:'Error al actualizar los datos'});
    }
};

module.exports = {getCurso,addCurso,deleteCurso,updateCurso}

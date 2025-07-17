const EstudianteModel = require('../models/EstudianteModel');

const getEstudiante = async(req,res)=>{
    try{
        const estudiante = await EstudianteModel.getEstudiante();
        res.json(estudiante);
    }
    catch(error){
        res.status(500).json({error: 'Error al obtener los estudiantes'});
    }
};

const addEstudiante = async(req,res)=>{
    const {FirstName, LastName, EmailAcad, password} = req.body;
    try{
        const result = await EstudianteModel.createEstudiante(FirstName, LastName, EmailAcad, password);
        res.json(result);
    }
    catch(error){
        res.status(500).json({error:'Error al crear Estudiante'});
    }
};

const deleteEstudiante = async(req, res) =>{
    const {EstudianteID} = req.body;
    try{
        const result = await EstudianteModel.deleteEstudiante(EstudianteID);
        res.json(result);
    }
    catch(error){
        res.status(500).json({error:'Error al elimiar estudiante'});
    }
};

const updateEstudiante = async(req,res)=>{
    const {EstudianteID, FirstName, LastName, EmailAcad, password} = req.body;
    try{
        const result = await EstudianteModel.updateEstudiante(EstudianteID, FirstName, LastName, EmailAcad, password);
        res.json(result);
    }
    catch(error){
        res.status(500).json({error:'Error al actualizar estudiante'});
    }
};


module.exports = {getEstudiante, addEstudiante, deleteEstudiante, updateEstudiante}
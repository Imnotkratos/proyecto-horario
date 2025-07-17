const HorarioModel = require('../models/HorarioModel');

const getHorario = async(req,res)=>{
    // Manejo de errores
    try{
        const horario = await HorarioModel.getHorario();
        res.json(horario);
    }
    catch(error){
        res.status(500).json({message:`Error al obtener horario`});
    }
};

const addHorario = async(req,res)=>{
    
    // Obtenemos lo datos
    const {CursoID, ProfesoresID, EstudianteID} = req.body;
    
    try{
        const horario = await HorarioModel.createHorario(CursoID,ProfesoresID,EstudianteID);
        res.json(horario);
    }
    catch(error){
        res.status(500).json({message:`Error al crear el horario`});
    }
};

const updateHorario = async(req,res)=>{
    const {CursoID, ProfesoresID, EstudianteID} = req.body;
    try{
        const horario = await HorarioModel.updateHorario(CursoID,ProfesoresID, EstudianteID);
        res.json(horario);
    }
    catch(error){
        res.status(500).json({message:`Error al actualizar el horario`});
    }
};

const deleteHorario = async(req,res)=>{
    const {HorarioID} = req.body;
    try{
        const horario = await HorarioModel.deleteHorario(HorarioID);
        res.json(horario);
    }
    catch(error){
        res.status(500).json({message:`Error al eliminar horario`});
    }
};

module.exports = {getHorario, addHorario, updateHorario, deleteHorario};
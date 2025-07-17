// Los Controllers son los encargados de manejar la lógica de negocio de la aplicación.

const ProfesorModel = require('../models/ProfesorModel');

const getProfesores = async(req,res)=>{
    try{
        // Llamamos al método para obtener los profesores
        const profesores = await ProfesorModel.getProfesores();
        res.json(profesores);
    }
    catch(error){
        res.status(500).json({error: 'Error al obtener los profesores'});
    }
};

const addProfesor = async(req,res)=>{
    // Desestructuramos los datos del cuerpo de la solicitud
    const {FirstName,LastName, EmailAcad} = req.body;

    try{
        // Validamos que los campos no estén vacíos
        const newCursoID = await ProfesorModel.createProfesor(FirstName,LastName,EmailAcad);
        res.status(201).json({message: 'Profesor creado exitosamente', id: newCursoID});
    }
    catch(error){
        res.status(500).json({error: 'Error al crear el profesor'});
    }
};

const deleteProfesor = async(req,res)=>{
    // Obtenemos el ID del profesor desde los parámetros de la solicitud
    const {ProfesoresID} = req.params;

    try{
        const result = await ProfesorModel.deleteProfesor(ProfesoresID);
        res.json(result)
        res.status(200).json({message: 'Profesor eliminado exitosamente'});
    }
    catch(error){
        res.status(500).json({error: 'Error al eliminar el profesor'});
    }
};

const updateProfesor = async(res,req)=>{
    const {ProfesoresID, FirstName, LastName, EmailAcad, password} = req.body;
    try{
        const result = await ProfesorModel.updateProfesor(ProfesoresID, FirstName, LastName, EmailAcad, password);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({error: 'Error al actualizar el profesor'});
    }
};

// Exportamos las funciones para usarlas en las rutas
module.exports = {getProfesores, addProfesor, deleteProfesor, updateProfesor};
const express = require('express');

const router = express.Router();

const HorarioController = require('../controllers/HorarioController');

router.get('/',HorarioController.getHorario);
router.post('/',HorarioController.addHorario);
router.put('/',HorarioController.updateHorario);
router.delete('/:id',HorarioController.deleteHorario);


module.exports = router;
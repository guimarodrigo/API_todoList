'use strict';
const express = require('express');
const router = express.Router();

const controllerGET = require('../controllers/getTarefaController')
const controllerPUT = require('../controllers/putTarefaController')
const controllerPOST = require('../controllers/postTarefaController')
const controllerDELETE = require('../controllers/deleteTarefaController')

router.get('/', controllerGET.get)
router.put('/:id', controllerPUT.put);
router.post('/', controllerPOST.post);
router.delete('/:id', controllerDELETE.delete);

module.exports = router;
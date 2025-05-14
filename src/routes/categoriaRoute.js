'use strict';
const express = require('express');
const router = express.Router();

const controllerGET = require('../controllers/getCategoriaController')
const controllerPOST = require('../controllers/postCategoriaController')
const controllerPUT = require('../controllers/putCategoriaController')
const controllerDELETE = require('../controllers/deleteCategoriaController')

router.get('/', controllerGET.get);
router.post('/', controllerPOST.post);
router.put('/:id', controllerPUT.put);
router.delete('/:id', controllerDELETE.delete);

module.exports = router;
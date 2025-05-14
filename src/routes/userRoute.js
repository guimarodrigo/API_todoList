'use strict';
const express = require('express');
const router = express.Router();

// const controller = require('../controllers/userController')
const controllerGET = require('../controllers/getUserController')
const controllerPUT = require('../controllers/putUserController')
const controllerPOST = require('../controllers/postUserController')
const controllerDELETE = require('../controllers/deleteUserController')

router.get('/', controllerGET.get)
router.put('/:id', controllerPUT.put);
router.post('/', controllerPOST.post);
router.delete('/:id', controllerDELETE.delete);

module.exports = router;
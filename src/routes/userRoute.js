"use strict";
const express = require("express");
const router = express.Router();
const {verificarLogin} = require('../middlewares/auth')

const controller = require("../controllers/userController");
const loginController = require("../controllers/loginController");

router.post("/", controller.post);
router.post("/login", loginController.post);

router.use(verificarLogin)
router.get("/", controller.get);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;

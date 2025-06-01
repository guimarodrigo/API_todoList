"use strict";
const express = require("express");
const router = express.Router();

const controller = require("../controllers/categoriaController");
const { verificarLogin } = require("../middlewares/auth");

router.use(verificarLogin)
router.get("/", controller.get);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;

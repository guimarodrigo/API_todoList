'use strict'
const express = require('express');
const router = express.Router();

//Get tarefas
exports.get = (req, res, next) => {
    res.status(200).send({
        title: "Terefa recebida",
    })
};

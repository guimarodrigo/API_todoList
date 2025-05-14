'use strict'

const express = require('express');
const router = express.Router();


//Get categoria
exports.get = (req, res, next) => {
    res.status(200).send({
        title: "Categoria recebida",
    })
};
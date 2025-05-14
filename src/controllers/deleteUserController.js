'use strict'

const express = require('express');
const router = express.Router();

//Deletar Usuario
exports.delete = (req, res, next) => {
    res.status(201).send(req.body);
};
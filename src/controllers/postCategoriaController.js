'use strict'

const express = require('express');
const router = express.Router();

//Post Categoria 
exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};
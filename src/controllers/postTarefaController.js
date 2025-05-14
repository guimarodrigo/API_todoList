'use strict'
const express = require('express');
const router = express.Router();

//Post Tarefa
exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};
'use strict'

const express = require('express');
const router = express.Router();

//Delete Vategoria 
exports.delete = (req, res, next) => {
    res.status(201).send(req.body);
};

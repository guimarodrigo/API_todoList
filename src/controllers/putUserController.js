'use strict'

const express = require('express');
const router = express.Router();

//Put Usuario
exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ 
        id: id, 
        item: req.body
    })
};
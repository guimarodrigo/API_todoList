'use strict'

const express = require('express');
const router = express.Router();


//Put Categoria 
exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ 
        id: id, 
        item: req.body
    })
};
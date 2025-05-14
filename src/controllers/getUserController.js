// 'use strict'

// const express = require('express');
// const router = express.Router();

// //get usuario
// exports.get = (req, res, next) => {
//     res.status(200).send({
//         title: "Usuario recebido",
//     })
// };

const userService = require('../services/userService');

exports.get = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

'use strict' // JS fica mais "Criterioso" evitando erros de digitação
const app = require('../src/app') // Cria uma variavel que 
                                    //acessa meu app pelo caminho dele
const debug = require('debug')('nodestr:server');
const http = require('http'); //Inicializa meu metodo http

const server = http.createServer(app); //Cria meu servidor que recebe meu app
//Rota: /api/produtos (localhost:3000/api/produtos)

const express = require('express');
const rota = express.Router();

const produtoController = require('../controller/produto_controller');

//Inserir
rota.post('/', produtoController.inserir);
//Listar
rota.get('/', produtoController.listar);
//BuscarPorId
rota.get('/:id', produtoController.buscarPorId);
//Atualizar
rota.put('/:id', produtoController.atualizar);
//Deletar
rota.delete('/:id', produtoController.deletar);

module.exports = rota;
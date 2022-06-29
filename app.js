const express = require('express')
const produtoNegocio = require('./negocio/produto_negocio')
const produtoController = require('./controller/produto_controller');

const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Inserir
app.post('/api/produtos', produtoController.inserir);

//Listar
app.get('/api/produtos', produtoController.listar);

//BuscarPorId
app.get('/api/produtos/:id', produtoController.buscarPorId);



//Atualizar
app.put('/api/produtos/:id', produtoController.atualizar);

//Deletar
app.delete('/api/produtos/:id', produtoController.deletar);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Inserir
app.post('/api/produtos', (req, res) => {
  const produto = req.body;
  console.log('POST produtos', req.body);
  const data = {};
  data.msg = `Adicionando produto ${produto.nome}`;
  //res.sendStatus(201);
  res.status(201).json(data);
})

//Listar
app.get('/api/produtos', (req, res) => {
  const data = {};
  data.msg = `Listando produtos`;
  //res.set('Content-Type', 'application/json');
  res.json(data);
})

//BuscarPorId
app.get('/api/produtos/:id', (req, res) => {
    const id = req.params.id;
    const data = {};
    data.msg = `Buscando produto por id=${id}`;
    res.json(data);
})



//Atualizar
app.put('/api/produtos/:id', (req, res) => {
  const id = req.params.id;
  const produto = req.body;
  const data = {};
  data.msg = `Atualizando produto ${produto.nome} com id=${id}`;
  res.json(data);
})

//Deletar
app.delete('/api/produtos/:id', (req, res) => {
  const id = req.params.id;
  const data = {};
  data.msg = `Deletando produto com id=${id}`;
  res.json(data);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


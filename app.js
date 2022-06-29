const express = require('express')
const produtoNegocio = require('./negocio/produto_negocio')

const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Inserir
app.post('/api/produtos', (req, res) => {
  const produto = req.body;

  produtoNegocio.inserir(produto, 
    function(err, produtoInserido) {
      if(err){
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.status(201).json(produtoInserido);
      }
    });

})

//Listar
app.get('/api/produtos', (req, res) => {
  produtoNegocio.listar(function (err, produtos) {
    if(err) {
      res.status(err.numero).json({erro: err.mensagem});
    }
    else {
      res.json(produtos);
    }
  })
})

//BuscarPorId
app.get('/api/produtos/:id', (req, res) => {
    const id = req.params.id;

    produtoNegocio.buscarPorId(id, function (err, produto){
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(produto);
      }
    });
})



//Atualizar
app.put('/api/produtos/:id', (req, res) => {
  const id = req.params.id;
  const produto = req.body;
  produtoNegocio.atualizar(id, produto, 
    function(err, produtoAlterado) {
      if(err){
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(produtoAlterado);
      }
    });
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


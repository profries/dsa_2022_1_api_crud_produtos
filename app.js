const express = require('express')
const app = express()
const port = 3000


app.get('/api/produtos', (req, res) => {
  const data = {};
  data.msg = `Listando produtos`;
  res.json(data);
})

app.get('/api/produtos/:id', (req, res) => {
    const id = req.params.id;
    const data = {};
    data.msg = `Buscando produto por id=${id}`;
    res.json(data);
})

app.post('/api/produtos', (req, res) => {
  console.log('POST produtos')
  const data = {};
  data.msg = `Adicionando produto`;
  //res.sendStatus(201);
  res.status(201).json(data);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

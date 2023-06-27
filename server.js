const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const containerIP = req.ip;
  res.send(`IP do container: ${containerIP}`);
});

app.listen(3000, () => {
  console.log('Servidor web iniciado na porta 3000');
});

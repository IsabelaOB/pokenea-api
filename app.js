const express = require('express');
const app = express();
const port = 3000;


const infoRoute = require('./src/routes/info');
const fraseRoute = require('./src/routes/frase');

app.get('/', (req,res) => {
  res.send("Bienvenido a la API de Pokeneas.")
});

app.use('/info', infoRoute);
app.use('/frase', fraseRoute);

app.listen(port, () => {
  console.log(`Pokenea API running on http://localhost:3000`);
});
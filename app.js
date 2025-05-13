const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const infoRoute = require('./src/routes/info');
const fraseRoute = require('./src/routes/frase');

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'src/views/home.html'))
});

app.use('/info', infoRoute);
app.use('/frase', fraseRoute);

app.listen(port, () => {
  console.log(`Pokenea API running on http://localhost:3000`);
});
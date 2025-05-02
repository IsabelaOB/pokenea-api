const express = require('express');
const app = express();
const port = 3000;

const infoRoute = require('./routes/info');
const fraseRoute = require('./routes/frase');

app.use('/info', infoRoute);
app.use('/frase', fraseRoute);

app.listen(port, () => {
  console.log(`Pokenea API running on port ${port}`);
});
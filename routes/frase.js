const express = require('express');
const router = express.Router();
const pokeneas = require('../pokeneas/data');
const os = require('os');

router.get('/', (req, res) => {
  const random = Math.floor(Math.random() * pokeneas.length);
  const { imagen, frase } = pokeneas[random];
  const containerId = os.hostname();
  res.send(`
    <div style="text-align:center;">
      <img src="${imagen}" style="max-width:300px;" />
      <p><strong>${frase}</strong></p>
      <p>Contenedor ID: ${containerId}</p>
    </div>
  `);
});

module.exports = router;
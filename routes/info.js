const express = require('express');
const router = express.Router();
const pokeneas = require('../pokeneas/data');
const os = require('os');

router.get('/', (req, res) => {
  const random = Math.floor(Math.random() * pokeneas.length);
  const { id, nombre, altura, habilidad } = pokeneas[random];
  const containerId = os.hostname();
  res.json({ id, nombre, altura, habilidad, containerId });
});

module.exports = router;
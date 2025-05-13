const express = require('express');
const router = express.Router();
const pokeneas = require('../models/pokeneas');
const os = require('os');
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const random = Math.floor(Math.random() * pokeneas.length);
  const { id, nombre, altura, habilidad } = pokeneas[random];
  const containerId = os.hostname();

  const htmlTemplatePath = path.join(__dirname, '../views/info.html');
  let htmlContent = fs.readFileSync(htmlTemplatePath, 'utf8');

  htmlContent = htmlContent
    .replace('{{NOMBRE}}', nombre)
    .replace('{{ID}}', id)
    .replace('{{ALTURA}}', altura)
    .replace('{{HABILIDAD}}', habilidad)
    .replace('{{CONTAINERID}}', containerId);
  
  res.send(htmlContent);
});

module.exports = router;
const express = require('express');
const router = express.Router();
const pokeneas = require('../models/pokeneas');
const os = require('os');
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const random = Math.floor(Math.random() * pokeneas.length);
  const { imagen, frase } = pokeneas[random];
  const containerId = os.hostname();
  
  const htmlTemplatePath = path.join(__dirname, '../views/frase.html');
  let htmlContent = fs.readFileSync(htmlTemplatePath, 'utf8');
  
  htmlContent = htmlContent
    .replace('{{IMAGEN}}', imagen)
    .replace('{{FRASE}}', frase)
    .replace('{{CONTAINERID}}', containerId);
  
  res.send(htmlContent);
});

module.exports = router;
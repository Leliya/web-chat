/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require('express');

const app = express();
const path = require('path');

const filepath = path.resolve(__dirname, 'dist');

const PORT = process.env.PORT || 3000;

app.use(express.static(filepath));

app.get('*', (_, res) => {
  res.sendFile(path.resolve(filepath, 'index.html'), {
    encoding: 'utf8',
  });
});

app.listen(PORT);

const express = require("express");

const app = express();
const path = require("path");

const filepath = path.join(__dirname, "dist");

const PORT = process.env.PORT || 3000;

app.use(express.static(filepath));

app.listen(PORT);

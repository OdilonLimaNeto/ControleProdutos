const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o APP
const app = express();

app.use(express.json());

//Permite a api ser acessada publicamente
app.use(cors());

// Iniciando o mongoDB
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('useFindAndModify', false);


requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));


app.listen(3001);

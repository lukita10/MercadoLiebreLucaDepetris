const express = require('express')
const app = express()
const path = require("path")
const PUERTO = 3000
app.use(express.static('./public'));


app.get('/', function(req,res){res.sendFile(path.join(__dirname, './views/home.html'))});

app.get('/', function(req,res){res.sendFile(path.join(__dirname, './views/home.html'))});
app.listen(PUERTO, () => console.log('Servidor corriendo; PUERTO 3000!!'));
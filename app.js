const express = require('express');
const app = express();
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')));


const mainRoutes = require('./routes/mainRoutes')

app.use('/',mainRoutes)


app.listen(3000,()=> {
    console.log('Servodor corriendo en el puerto 3000')
})
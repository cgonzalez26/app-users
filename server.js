const express = require('express');
//Modulo Path es nativo de Node es decir no hace falta instalarlo
const path = require('path');
//midleware: body-parser -> para entender las peticiones
const bodyParser = require('body-parser');
//midleware: body-parser -> leer peticiones desde url
const morgan = require('morgan');

// los 2 midleware requieren instal

//amos a usar el server Express
const app = express();

const apiRouter = require('./routes/api_v1');
//este modulo mongoose es para Conectarse a una BD Mongo y se instala con npm
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/misusuariosdb');

//settings

//midlewares para procesar las PETICIONES; GET/PUSH/PUT
//morgan sirve par ver por consola los resultados de las Peticiones
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
//para que los usuarios accedan a los Servicios del server
app.use('/',apiRouter);

//static
//Esto es para mandar archivos estaticos a Express
//app.use(express.static(__dirname + '/public/dist/app-users'));
//Vamos a pasar la Direccion Estatica usando el Modulo Path de Node
app.use(express.static(path.join(__dirname, '/public/dist/app-users')));



/*app.all('*', (req, res, next) =>{
    res.sendFile(path.resolve('./public/dist/index.html'))
});*/

app.listen(3000, () => {
    console.log('Server en el puerto 3000');
});




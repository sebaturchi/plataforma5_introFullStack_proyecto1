
//LLAMAR A EXPRESS (DEPENDENCIA)


const express = require('express')
const router = require('./routes/index')

const app = express()

app.use(express.json()) //PARSEA LA DATA, PARA PODER TRABAJAR CON OBJETOS. ORGFANIZADOR DE LA DATA

app.use('/', router)  //cuando localhost3000/ anda a router y ahi lo resuelve. ORGANIZADOR DE LAS RUTAS

//FUNCION PARA LEVANTAR NUESTRO SRERVIDOR
app.listen(3000, ()=>{
    console.log('servidor escuchando en puerto 3000')
});
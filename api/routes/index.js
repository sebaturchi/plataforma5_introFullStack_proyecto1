const personajesSimpson = [
    {
      "nombre": "Bart",
      "apellido": "Simpson",
      "email": "eatmyshorts@email.com",
      "direccion": {
        "calle": "Av. Siempreviva 742",
        "ciudad": "Springfield",
        "pais": "Estados Unidos"
      },
      "telefonos": ["555-1234", "555-5678"]
    },
    {
      "nombre": "Homer",
      "apellido": "Simpson",
      "email": "homer.simpson@email.com",
      "direccion": {
        "calle": "Av. Siempreviva 742",
        "ciudad": "Springfield",
        "pais": "Estados Unidos"
      },
      "telefonos": ["555-8765", "555-4321"]
    },
    {
      "nombre": "Marge",
      "apellido": "Simpson",
      "email": "marge.simpson@email.com",
      "direccion": {
        "calle": "Av. Siempreviva 742",
        "ciudad": "Springfield",
        "pais": "Estados Unidos"
      },
      "telefonos": ["555-2468", "555-1357"]
    },
    {
      "nombre": "Lisa",
      "apellido": "Simpson",
      "email": "lisa.simpson@email.com",
      "direccion": {
        "calle": "Av. Siempreviva 742",
        "ciudad": "Springfield",
        "pais": "Estados Unidos"
      },
      "telefonos": ["555-9876", "555-6543"]
    },
    {
      "nombre": "Maggie",
      "apellido": "Simpson",
      "email": "maggie.simpson@email.com",
      "direccion": {
        "calle": "Av. Siempreviva 742",
        "ciudad": "Springfield",
        "pais": "Estados Unidos"
      },
      "telefonos": ["555-1111", "555-2222"]
    }
  ];



const express = require('express')

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

//RUTAS:

router.get("/", (req, res)=>{    // "/" para la home// "/" para la home
    res.status(200).send("HOLA")
})   

router.get("/users", (req, res)=>{
    //CONSULTA A LA BD, PIDIENDOLE TODOS LOS USUARIOS
    
    res.status(200).send(personajesSimpson)
})   

router.get("/products", (req, res)=>{
    res.status(200).send("hasta luego")
})   

//EXPONER LAS RUTAS HECHAS, PARA DARLE ACCESO A OTROS ARCHIVOS:

module.exports = router //router, lo que quiero exportar, lo que quiero hacer visible, para importar en el archivo del index de api


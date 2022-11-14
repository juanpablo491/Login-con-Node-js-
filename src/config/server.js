const express = require('express')//servidor
const path = require('path')//manejo de rutas
const dotenv = require('dotenv')//Manejar variables de
const bcryptjs = require('bcryptjs')//encriptar password
const session = require('express-session')//Session de servidor

const app = express()

//configuracion
//configuracion puerto
app.set('port',process.env.PORT || 3000)
//configurar el gestor de plantillar
app.set('view engine', 'ejs')
//configurar la ruta donde se alojara las vistas
app.set('views', path.join(__dirname, '../app/views'))

//Middlewares (para recibir facilmente la informacion de los formularios)
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//configurar dotenv (variables de entorno)
dotenv.config({path: path.join(__dirname, '../env/.env')})

//configurar la ruta donde estan alojados los css
app.use('/resources', express.static(path.join(__dirname, '../public')))

//configurar el manejo de sessions dentro de la aplicacion
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}))

module.exports= app
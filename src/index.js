//importar modulos del server
const app = require('./config/server')
const connection = require('./config/db')
require('./app/routes/login_register')(app)

//el servidor debe ser escuchado en el puerto.
app.listen(app.get('port'), ()=>{
    console.log("servidor en el puerto ", app.get('port'))
})
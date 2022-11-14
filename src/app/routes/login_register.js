const sql = require("mssql")
const app = require("../../config/server")
const connection = require("../../config/db");
const bcryptjs = require('bcryptjs');
//const { connectionSQL } = require("../../config/config");

module.exports = app =>{
    app.get('/', (req, res)=>{
        res.render('../views/login.ejs')
    })

    app.get('/login', (req, res)=>{
        res.render('../views/login.ejs')
    })
    app.get('/register', (req, res)=>{
        res.render('../views/register.ejs')
    })
    app.get('/catalogo', (req, res)=>{
        res.render('../views/catalogo.ejs')
    })
    app.get('/index', (req, res)=>{
        res.render('../views/index.ejs')
    })
    app.get('/formulario', (req, res)=>{
        res.render('../views/formulario.ejs')
    })
    app.get('/tabla', (req, res)=>{
        res.render('../views/tabla.ejs')
    })

    app.post('/register', async(req, res) => {
        const{user, pass} = req.body;
        console.log(req.body);
        let passwordHassh = await bcryptjs.hash(pass,8)
        try{
            let pool = await sql.connect(connection)
            const result=await pool.request()
            .input('usuario',sql.VarChar,user)
            .input('contra', sql.VarChar,passwordHassh)
            .execute("sp_i_usuario")
            console.log("Registro Exitoso")
            res.render('../views/register.ejs', {
                alert: true,
                alertTitle:"registro",
                alertMessage: "Registro satisfactorio",
                alertIcon:"sucess",
                showcConfirmButton:false,
                timer:1500,
                ruta:''
            })

        }catch(error){
            console.log(error)
        }
        })
        app.post('/auth', async(req, res) => {
            const{user, pass} = req.body;
            let passwordHassh = await bcryptjs.hash(pass,8)
            
            if( user && pass){
             let pool = await sql.connect(connection)
             const result = await pool.request()
             .input('usuario', sql.VarChar, user)
             .query('select * from usuarios where usuario = @usuario',
             async(err,result) => {
                 console.log(result)
                 if (result.length===0 || !(await bcryptjs.compare(pass, result.recordset[0].contrasena))){
                     res.send('USUARIO y/o Contraseñas incorrectos');
                 }else{
                     res.render('./index.ejs')
                 }
             })
            }
     
     
         })
 
}
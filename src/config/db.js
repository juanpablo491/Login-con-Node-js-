const sql = require('mssql')

const connection = {
    user :"web",
    password:"12",
    server:"localhost",
    database:"dbveterinaria",
    options:{
        encrypt:true,
        trustServerCertificate: true,

    },
};
async () => {
    try {
     // make sure that any items are correctly URL encoded in the connection string
     await sql.connect(connection)
     const result = await sql.query("select * from usuarios")
     console.log("Hay conexion" + result)
    } catch (err) {
      console.log(err)
    }
   }
//console.log("Hay conexión: " + getConnection());


module.exports = connection; 
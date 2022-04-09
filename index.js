const express = require('express');
const conexion = require('./src/dbConn');
const cors = require('cors')
const app = express()


//midlware 
app.use(express.json())
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))


//routes
app.use('/clientes',cors(), require('./src/clients/routes/clientsRoutes'))


//initalizacion app
app.listen(3001, ()=>{
    console.log("conectado");
})

//conect db
conexion

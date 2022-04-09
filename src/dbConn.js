const mongoose = require('mongoose');

//Set up default mongoose connection
//Bind connection to error event (to get notification of connection errors)
function conexion() {
const mongoDB = 'mongodb+srv://adrian:Zoe0617*@cluster0.n6kas.mongodb.net/finance?retryWrites=true&w=majority';
    const conn = mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

    if (conn) {
        console.log("conectado dbdbdbd");
    }else{
        console.log("no conectado");
    }

}


module.exports = conexion()
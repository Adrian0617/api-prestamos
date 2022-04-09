const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    prestamo: {
      type: Number,
      default: 0,
    },
    fechaPrestamo:{
      type:Date,
    },
    cuotas:{
      type:Number,
      required:true
    },
    valorCuota:{
      type:Number,
      required:true
    }
});

const Client = mongoose.model("Client", ClientSchema);
module.exports = Client;
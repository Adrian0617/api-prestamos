const Client = require("../models/clientModel")


const getClients = async(req, res)=>{
    const clients = await Client.find()
    res.send(clients)
}

const detailClient = async(req, res)=>{
    const detail = await Client.findById(req.params.id)
    res.json(detail)
}

const createClient = async(req, res)=>{

    // let porcent = 10;
    // if (req.body.cuotas > 3 && req.body.cuotas < 6) {
    //     porcent = 12
    // }else if(req.body.cuotas > 6){
    //     porcent = 15
    // }
    const newClient = new Client({
        "name":req.body.name,
        "prestamo":req.body.prestamo,
        "fechaPrestamo":req.body.fechaPrestamo,
        "cuotas":req.body.cuotas,
        "valorCuota":req.body.valorCuota
    })
    await newClient.save()
    res.json(newClient)
}

const updateClient = async(req, res)=>{
    const updated = await Client.findOneAndUpdate(req.params.id, req.body)
    await updated.save()
}

const deleteClient=async(req, res)=>{
    await Client.findByIdAndRemove(req.params.id)
    res.json({status: "deleted"})
}

module.exports =  {
    getClients,
    detailClient,
    createClient,
    updateClient,
    deleteClient,
    
}
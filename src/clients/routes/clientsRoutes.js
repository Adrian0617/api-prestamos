const express = require('express')
const { getClients,createClient, updateClient, deleteClient, detailClient } = require('../controller/clientsController')
const Client = require('../models/clientModel')
const route = express.Router()


route.get('/', getClients)
route.get('/:id', detailClient)
route.post('/create', createClient)
route.put('/update/:id', updateClient)
route.delete('/delete/:id', deleteClient)

module.exports = route
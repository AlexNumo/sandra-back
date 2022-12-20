const clientService = require('../services/client.service');

const listClient = async (req, res, next) => {
    try {
        const all = await clientService.listClient();
        res.json(all);
    } catch (e) {
        next(e);
    }
}

const addClient = async (req, res, next) => {
    try {
        const data = await clientService.addClientInfo(req.body);
        res.status(201).json(data);
    } catch (e) {
        if(e.message.includes('duplicate')){
            e.status = 400
        }
        next(e);
    }
}

const deleteClient = async (req, res, next) => {
    try {
        const data = await clientService.deleteClient(req.body);
        res.status(201).json(data);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    listClient, addClient, deleteClient
}

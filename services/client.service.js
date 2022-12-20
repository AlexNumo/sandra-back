const { Client } = require('../models/client');
const {createError} = require("../helpers/errors");

const listClient = async () => {
    return Client.find({}, {}, {});
}

const addClientInfo = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { name_client, tel} = req;
    const find = await Client.findOne({ tel });
    if (find) {
        throw createError(409, 'Client in use')
    }
    const newCoach = new Client({name_client, tel});
    await newCoach.save();
}
const deleteClient = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { name_client } = req;
       const find = await Client.findOne({ name_client });
    if (find) {
        await Client.findByIdAndDelete(find._id);
    }
    return find;

}

module.exports = {
    listClient, addClientInfo, deleteClient
}

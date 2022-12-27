const dataTGBot = require("../services/tgBotUser.service");

const listDataUsers = async (req, res, next) => {
    try {
        const all = await dataTGBot.listData();
        res.json(all);
    } catch (e) {
        next(e);
    }
}

const addDataUsers = async (req, res, next) => {
    try {
        const data = await dataTGBot.addData(req.body);
        return res.status(201).json(data);
    } catch (e) {
        if(e.message.includes('duplicate')){
            e.status = 400
        }
        next(e);
    }
}

const findTraineeUsers = async (req, res, next) => {
    try {
        const data = await dataTGBot.findTrainee(req.body);
        res.status(201).json(data);
    } catch (e) {
        if(e.message.includes('duplicate')){
            e.status = 400
        }
        next(e);
    }
}

module.exports = {
    listDataUsers, addDataUsers, findTraineeUsers
}

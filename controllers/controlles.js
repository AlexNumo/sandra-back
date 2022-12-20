const {listData} = require("../services");

const listDataView = async (req, res, next) => {
    try {
        const all = await listData.listData();
        res.json(all);
    } catch (e) {
        next(e);
    }
}

const addData = async (req, res, next) => {
    try {
        const data = await listData.addData(req.body);
        res.status(201).json(data);
    } catch (e) {
        if(e.message.includes('duplicate')){
            e.status = 400
        }
        next(e);
    }
}

const findTrainee = async (req, res, next) => {
    try {
        const data = await listData.findTrainee(req.body);
        res.status(201).json(data);
    } catch (e) {
        if(e.message.includes('duplicate')){
            e.status = 400
        }
        next(e);
    }
}

module.exports = {
    listDataView, addData, findTrainee
}

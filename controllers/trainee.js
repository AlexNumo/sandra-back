const traineeService = require('../services/trainee.service');

const listTrainee = async (req, res, next) => {
    try {
        const all = await traineeService.listTrainee();
        res.json(all);
    } catch (e) {
        next(e);
    }
}

const addTrainee = async (req, res, next) => {
    try {
        const data = await traineeService.addTrainee(req.body);
        res.status(201).json(data);
    } catch (e) {
        if(e.message.includes('duplicate')){
            e.status = 400
        }
        next(e);
    }
}

const deleteTrainee = async (req, res, next) => {
    try {
        const data = await traineeService.deleteTrainee(req.body);
        res.status(201).json(data);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    listTrainee, addTrainee, deleteTrainee
}

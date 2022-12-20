const kindTraineeService = require('../services/kind-trainee.service');

const listKindTrainee = async (req, res, next) => {
    try {
        const all = await kindTraineeService.listKindTrainee();
        res.json(all);
    } catch (e) {
        next(e);
    }
}

const addKindTrainee = async (req, res, next) => {
    try {
        const data = await kindTraineeService.addKindTrainee(req.body);
        res.status(201).json(data);
    } catch (e) {
        if(e.message.includes('duplicate')){
            e.status = 400
        }
        next(e);
    }
}

const deleteKindTrainee = async (req, res, next) => {
    try {
        const data = await kindTraineeService.deleteKindTrainee(req.body);
        res.status(201).json(data);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    listKindTrainee, addKindTrainee, deleteKindTrainee
}

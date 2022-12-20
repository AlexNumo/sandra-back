const coachService = require('../services/coach.service');

const listCoach = async (req, res, next) => {
    try {
        const all = await coachService.listCoach();
        res.json(all);
    } catch (e) {
        next(e);
    }
}

const addCoach = async (req, res, next) => {
    try {
        const data = await coachService.addCoachInfo(req.body);
        res.status(201).json(data);
    } catch (e) {
        if(e.message.includes('duplicate')){
            e.status = 400
        }
        next(e);
    }
}

const deleteCoach = async (req, res, next) => {
    try {
        const data = await coachService.deleteCoach(req.body);
        res.status(201).json(data);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    listCoach, addCoach, deleteCoach
}

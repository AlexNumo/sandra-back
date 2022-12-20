const { KindTrainee } = require('../models/kind-trainee');
const {createError} = require("../helpers/errors");

const listKindTrainee = async () => {
    return KindTrainee.find({}, {}, {});
}

const addKindTrainee = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { id, value, label } = req;
    const find = await KindTrainee.findOne({ id });
    if (find) {
        throw createError(409, 'Kind-Trainee in use');
    }
    const newCoach = new KindTrainee({id, value, label});
    await newCoach.save();
}

const deleteKindTrainee = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { id } = req;
       const find = await KindTrainee.findOne({ id });
    if (find) {
        await KindTrainee.findByIdAndDelete(find._id);
    }
    return find;

}

module.exports = {
    listKindTrainee, addKindTrainee, deleteKindTrainee
}

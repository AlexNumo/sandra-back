const { Trainee } = require('../models/trainee');

const listTrainee = async () => {
    return Trainee.find({}, {}, {});
}

const addTrainee = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { name_Coach, info} = req;
    const find = await Trainee.findOne({ name_Coach });
    if (find) {
       return await Trainee.findOneAndUpdate(
        { name_Coach },
        { $push: { info: info } },
    );
    }
    const newTrainee = new Trainee({name_Coach, info});
    return await newTrainee.save();
}
const deleteTrainee = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { name_Coach } = req;
    const find = await Trainee.findOne({ name_Coach });
    if (find) {
        await Trainee.findByIdAndDelete(find._id);
    }
    return find;

}

module.exports = {
    listTrainee, addTrainee, deleteTrainee
}

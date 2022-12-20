const { Schedule } = require('../models/schedule');
const listData = async () => {
    return Schedule.find({}, {}, {});
}

const addData = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { id, day, time, kind_trainee, name_Coach} = req;
    const find = await Schedule.findOne({ id });
    if (find) {
        await Schedule.findByIdAndDelete(find._id);
    }
    const newData = new Schedule({id, day, time, kind_trainee, name_Coach});
    await newData.save();
}
const findTrainee = async (req, res) => {
    const { id } = req;
    console.log(req)
    const find = await Schedule.findOne({ id });
    return find;

}

module.exports = {
    listData, addData, findTrainee
}

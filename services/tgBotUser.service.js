const { TgBotUser } = require('../models/tgBotUser');

const listData = async () => {
    return TgBotUser.find({}, {}, {});
}

const addData = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { id, day, time, kind_trainee, name} = req;
    const find = await TgBotUser.findOne({ id });
    if (find) {
        await TgBotUser.findByIdAndDelete(find._id);
    }
    const newData = new TgBotUser({id, day, time, kind_trainee, name});
    return await newData.save();
}
const findTrainee = async (req, res) => {
    const { id } = req;
    console.log(req)
    const find = await TgBotUser.findOne({ id });
    return find;

}

module.exports = {
    listData, addData, findTrainee
}

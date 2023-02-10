const { TgBotUser } = require('../models/tgBotUser');

const listData = async () => {
    return TgBotUser.find({}, {}, {});
}

const addData = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { id, info } = req;
    const find = await TgBotUser.findOne({ id });
    if (find) {
       return await TgBotUser.findOneAndUpdate(
        { id },
        { $push: { info: info } },
    );
    }
    const newTGUser = new TgBotUser({id, info});
    return await newTGUser.save();
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

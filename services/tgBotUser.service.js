// const { DB_HOST} = process.env;
const { TgBotUser } = require('../models/tgBotUser');
// const co = require('co');
// const MongoDB = require('mongodb-client');
// const db = new MongoDB(DB_HOST);

const listData = async () => {
    return TgBotUser.find({}, {}, {});
};

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
const changeVisitTrainee = async (req, res) => {
    const { id, status } = req;
        await TgBotUser.updateOne({ 'info._id': id._id }, { '$set': { 'info.$.visitTrainee': status.status } });
    const done = await TgBotUser.findOneAndUpdate({ 'info._id': id._id }, (err, doc) => {
        if (err) { console.log(err); }
        return doc;
    });
    console.log(status)
    console.log(done)
    return done;
    };

module.exports = {
    listData, addData, changeVisitTrainee
}

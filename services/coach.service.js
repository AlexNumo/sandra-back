const { NewCoach } = require('../models/coach');
const {createError} = require("../helpers/errors");

const listCoach = async () => {
    return NewCoach.find({}, {}, {});
}

const addCoachInfo = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { name_Coach, tel, instagram} = req;
    const find = await NewCoach.findOne({ name_Coach });
    if (find) {
        throw createError(409, 'Coach in use');
    }
    const newCoach = new NewCoach({name_Coach, tel, instagram});
    await newCoach.save();
}
const deleteCoach = async (req, res) => {
    // eslint-disable-next-line camelcase
    const { name_Coach } = req;
       const find = await NewCoach.findOne({ name_Coach });
    if (find) {
        await NewCoach.findByIdAndDelete(find._id);
    }
    return find;

}

module.exports = {
    listCoach, addCoachInfo, deleteCoach
}

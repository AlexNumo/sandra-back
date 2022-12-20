const {Schema, model} = require('mongoose');

const schema = new Schema(
    {
        id: {
            type: String,
            unique: false
        },
        day: {
            type: String,
            unique: false
        },
        time: {
            type: String,
            unique: false
        },
        kind_trainee: {
            type: String,
            unique: false
        },
        name_Coach: {
            type: String,
            unique: false
        },
        date: {
            type: Date,
            default: Date.now()
        },
    }
);

const Schedule = model('schedule', schema);

module.exports = {
    Schedule,
}


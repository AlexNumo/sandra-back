const {Schema, model} = require('mongoose');

const schema = new Schema(
    {
        id: {
            type: String,
            unique: false
        },
        info: [{
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
            name: {
                type: String,
                unique: false
            },
            date: {
                type: Date,
                unique: false
                },
        }]
    }
);

const TgBotUser = model('tgBotUser', schema);

module.exports = {
    TgBotUser,
}


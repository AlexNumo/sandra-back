const {Schema, model} = require('mongoose');

const schema = new Schema(
    {
        name_Coach: {
            type: String,
            unique: false
        },
        info: [{
            date: {
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
            client: [{}],
        }]
    }
);

const Trainee = model('trainee', schema);

module.exports = {
    Trainee,
}


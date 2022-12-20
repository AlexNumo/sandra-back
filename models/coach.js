const {Schema, model} = require('mongoose');

const schema = new Schema(
    {
      name_Coach: {
          type: String,
          unique: false
      },
      tel: {
          type: String,
          unique: false
        },
      instagram: {
          type: String,
          unique: false
      }
    }
);

const NewCoach = model('newCoach', schema);

module.exports = {
    NewCoach,
}


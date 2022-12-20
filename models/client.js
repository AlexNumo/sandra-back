const {Schema, model} = require('mongoose');

const schema = new Schema(
    {
      name_client: {
          type: String,
          unique: false
      },
      tel: {
          type: String,
          unique: false
      },
    }
);

const Client = model('client', schema);

module.exports = {
    Client,
}


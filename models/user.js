const {Schema, model} = require('mongoose');
const Joi = require("joi");
const {v4} = require('uuid');

const schema = new Schema({
    name: {
      type: String,
      required: [true, 'Name is required'],
      unique: false,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
      },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
    type: Boolean,
    default: false,
  },
    verificationToken: {
    type: String,
    default: function () {
      return v4();
    }
  },
  }, {timestamps: true});

const User = model('user', schema);

const schemaRegister = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const schemaLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});


module.exports = {
    User, schemaRegister, schemaLogin
}
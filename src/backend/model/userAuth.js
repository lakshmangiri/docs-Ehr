const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userAuthDataSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userAuthDataSchema.plugin(uniqueValidator);

module.exports = mongoose.model('UserData', userAuthDataSchema);

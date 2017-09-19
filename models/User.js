/**
 * @author Philip Van Raalte
 * @date 2017-09-19.
 */
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  googleID: String
});

mongoose.model('users', userSchema);
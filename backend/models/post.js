const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  gender: {type: String, require: true},
  lookingFor: {type: String, require: true},
  between: {type: String, require: true},
  location: {type: String, require: true}
});

module.exports = mongoose.model('Post', postSchema);

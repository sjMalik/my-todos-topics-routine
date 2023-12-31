const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Topic = mongoose.model('Topics', TopicSchema);
module.exports = Topic;

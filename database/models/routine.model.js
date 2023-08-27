const mongoose = require('mongoose');

const RoutineSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  time_from: {
    type: String,
    required: true,
  },
  time_to: {
    type: String,
    required: true,
  },
});

const Routine = mongoose.model('routines', RoutineSchema);
module.exports = Routine;

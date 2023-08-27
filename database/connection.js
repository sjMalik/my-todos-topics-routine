const mongoose = require('mongoose');
const { DB_URL } = require('../config');
const debug = require('debug')('todos:dbConnection');

module.exports = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    debug('DB Connected');
  } catch (e) {
    debug(e);
    process.exit(1);
  }
};

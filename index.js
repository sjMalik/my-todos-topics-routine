// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const debug = require('debug')('todos:server');
const { PORT } = require('./config');
const app = require('./express-app');
const { databaseConnection } = require('./database');

const StartServer = async () => {
  await databaseConnection();

  app.listen(PORT, () => {
    debug(`Listening on port ${PORT}`);
  }).on('error', (err) => {
    debug(err);
    process.exit();
  });
};

StartServer();

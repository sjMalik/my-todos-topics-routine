const express = require('express');
const { PORT } = require('./config');
const expressApp = require('./express-app');
const { databaseConnection } = require('./database');
const debug = require('debug')('todos:server');

const StartServer = async () => {
  const app = express();

  await expressApp(app);

  await databaseConnection();

  app.listen(PORT, () => {
    debug(`Listening on port ${PORT}`);
  }).on('error', (err) => {
    debug(err);
    process.exit();
  });
};

StartServer();

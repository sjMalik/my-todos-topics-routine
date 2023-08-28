// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const cors = require('cors');
const { routines, todos, topics } = require('./routes');
const HandleErrors = require('./utils/error-handler');

const app = express();
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(cors());
app.use(express.static(`${__dirname}/public`));

// await databaseConnection();

// api
routines(app);
todos(app);
topics(app);

// error handling
app.use(HandleErrors);

module.exports = app;

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const debug = require('debug')('randomLearning:server');
// eslint-disable-next-line import/no-extraneous-dependencies
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// override with POST having ?_method=DELETE or ?_method=PUT or ?_method=PATCH
app.use(methodOverride('_method'));

const db = require('./config/db.config').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => debug('MongoDB Connected'))
  .catch((e) => debug(e));

app.use(express.static('./public'));
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/topics', require('./routes/topic.routes'));
app.use('/todos', require('./routes/todo.routes'));
app.use('/routines', require('./routes/routine.routes'));

module.exports = app;
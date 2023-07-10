const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cp = require('child_process');
const debug = require('debug')('randomLearning:server');


const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/topics', require('./routes/topic'));

app.listen(7777, () => {
  debug('running @ http://localhost:7777');
  // cp.exec('start chrome http://localhost:7777')
});

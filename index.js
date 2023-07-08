const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cp = require('child_process');
const debug = require('debug')('randomLearning:server');

const topics = require('./libs/topics');
let topicsToRead = 5;

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  res.render('Welcome', {
    topics: topics.getMultipleRandom(topicsToRead),
    topic: topicsToRead
  });
});

app.post('/no-of-topics', (req, res) => {
  topicsToRead = req.body.topic;
  res.redirect('/');
})

app.listen(7777, () => {
  debug('running @ http://localhost:7777');
  cp.exec('start chrome http://localhost:7777')
});

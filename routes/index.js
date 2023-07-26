const express = require('express');

const router = express.Router();

const debug = require('debug')('randomLearning:index');
const topicsLib = require('../libs/topics');
const Topic = require('../models/Topic');
const Routine = require('../models/Routine');

let topicsToRead = 10;

router.get('/', async (req, res) => {
  const topics = await Topic.find().collation({ locale: 'en', strength: 2 }).sort({ title: 1 });
  res.render('Welcome', {
    topics: topicsLib.getMultipleRandom(topics, topicsToRead),
    topic: topicsToRead,
  });
});

router.get('/routine', async (req, res) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  const today = days[now.getDay()];
  debug(today);
  const routines = await Routine.find({ day: today }).collation({ locale: 'en', strength: 2 }).sort({ day: 1 });
  debug(routines);
  res.render('Routine', {
    today,
    routines,
  });
});

router.post('/no-of-topics', (req, res) => {
  topicsToRead = req.body.topic;
  res.redirect('/');
});

module.exports = router;

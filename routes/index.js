const express = require('express');

const router = express.Router();

const topicsLib = require('../libs/topics');
const Topic = require('../models/topic.model');

let topicsToRead = 10;

router.get('/', async (req, res) => {
  const topics = await Topic.find().collation({ locale: 'en', strength: 2 }).sort({ title: 1 });
  res.render('Welcome', {
    topics: topicsLib.getMultipleRandom(topics, topicsToRead),
    topic: topicsToRead,
  });
});

router.post('/no-of-topics', (req, res) => {
  topicsToRead = req.body.topic;
  res.redirect('/');
});

module.exports = router;

const express = require('express');

const router = express.Router();

const topicsLib = require('../libs/topics');
const Topic = require('../models/Topic');

let topicsToRead = 5;

router.get('/', async (req, res) => {
  const topics = await Topic.find();
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

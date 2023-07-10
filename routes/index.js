const express = require('express');

const router = express.Router();

const topics = require('../libs/topics');

let topicsToRead = 5;

router.get('/', (req, res) => {
  res.render('Welcome', {
    topics: topics.getMultipleRandom(topicsToRead),
    topic: topicsToRead,
  });
});

router.post('/no-of-topics', (req, res) => {
  topicsToRead = req.body.topic;
  res.redirect('/');
});

module.exports = router;

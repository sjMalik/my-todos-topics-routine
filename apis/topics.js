const express = require('express');
const debug = require('debug')('randomLearning:api');
const Topic = require('../models/Topic');

const router = express.Router();

router.post('/', (req, res) => {
  const topic = req.body;
  const newTopic = new Topic({
    title: topic.title,
    url: topic.url,
  });
  newTopic.save()
    .then((newTopicRes) => {
      res.send(newTopicRes);
      debug(newTopicRes);
    })
    .catch((e) => debug(e));
});

router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.send(topics);
  } catch (e) {
    debug(e);
    res.status(500).end();
  }
});

module.exports = router;

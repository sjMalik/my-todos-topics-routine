const express = require('express');
const debug = require('debug')('randomLearning:api');
const Topic = require('../models/Topic');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const topic = req.body;
    await Topic.insertMany(topic);
    res.redirect('/');
  } catch (e) {
    debug(e);
  }
});

router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find().collation({ locale: 'en', strength: 2 }).sort({ title: 1 });
    res.send(topics);
  } catch (e) {
    debug(e);
    res.status(500).end();
  }
});

module.exports = router;

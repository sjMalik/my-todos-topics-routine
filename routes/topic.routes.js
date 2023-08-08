const express = require('express');

const topicController = require('../controllers/topic.controller');

const router = express.Router();

router.get('/new', (req, res) => {
  res.render('newTopic');
});

router.post('/', (req, res) => {
  topicController.create(req, res);
});

router.get('/', async (req, res) => {
  topicController.findAll(req, res);
});

router.get('/random/:topicsToRead', async (req, res) => {
  topicController.findRandom(req, res);
});

module.exports = router;

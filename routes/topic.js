const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const debug = require('debug')('randomLearning:route');

router.get('/new', (req, res) => {
  res.render('newTopic');
});

router.post('/new', (req, res) => {
  const topic = req.body;
  debug(topic);
  fs.readFile(path.join(__dirname, '../libs/data/topics.json'), (err, data) => {
    if (!err) {
      const json = JSON.parse(data);
      json.push(req.body);

      fs.writeFile(path.join(__dirname, '../libs/data/topics.json'), JSON.stringify(json), (e) => {
        if (e) debug(e);
        debug('The "data to append" was appended to file!');
        res.redirect('/');
      });
    } else {
      debug(err);
    }
  });
});

module.exports = router;

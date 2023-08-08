/* eslint-disable indent */
const debug = require('debug')('randomLearning:topic:controller');
const Topic = require('../models/topic.model');
const topicsLib = require('../libs/topics');

exports.create = async (req, res) => {
    try {
        const topic = req.body;
        const topics = await Topic.find();
        const found = topics.find((t) => t.title === topic.title);
        if (typeof found === 'object') {
            res.redirect('/topics.html');
        } else {
            await Topic.insertMany(topic);
            res.redirect('/topics.html');
        }
    } catch (e) {
        debug(e);
    }
};

exports.findAll = async (req, res) => {
    try {
        const topics = await Topic.find().collation({ locale: 'en', strength: 2 }).sort({ title: 1 });
        res.send(topics);
    } catch (e) {
        debug(e);
        res.status(500).end();
    }
};

exports.findRandom = async (req, res) => {
    try {
        const topics = await Topic.find().collation({ locale: 'en', strength: 2 }).sort({ title: 1 });
        res.send(topicsLib.getMultipleRandom(topics, req.params.topicsToRead));
    } catch (e) {
        debug(e);
        res.status(500).end();
    }
};

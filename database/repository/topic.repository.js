/* eslint-disable indent */
const debug = require('debug')('todos:topicRepository');
const { TopicModel } = require('../models');
const { APIError, STATUS_CODE } = require('../../utils/app-error');
const { getMultipleRandom } = require('../../utils/topic-lib');

class TopicRepository {
  async findTopic({ title }) {
    try {
      const existingTopic = await TopicModel.findOne({ title });
      return existingTopic;
    } catch (e) {
      throw new APIError(
        'API Error',
        STATUS_CODE.INTERNAL_ERROR,
        'Error creating topic',
      );
    }
  }

  async create({ title, url }) {
    try {
      await TopicModel.insertMany({ title, url });
      return true;
    } catch (e) {
      throw new APIError(
        'API Error',
        STATUS_CODE.INTERNAL_ERROR,
        'Error creating topic',
      );
    }
  }

  async findAll() {
    try {
      const topics = await TopicModel.find()
        .collation({ locale: 'en', strength: 2 })
        .sort({ title: 1 });
      debug(topics);
      return topics;
    } catch (e) {
      throw new APIError(
        'API Error',
        STATUS_CODE.INTERNAL_ERROR,
        'Error creating topic',
      );
    }
  }

  async findRandom(count) {
    try {
      const topics = await TopicModel.find()
        .collation({ locale: 'en', strength: 2 })
        .sort({ title: 1 });
      return getMultipleRandom(topics, count);
    } catch (e) {
      debug(e);
      throw new APIError(
        'API Error',
        STATUS_CODE.INTERNAL_ERROR,
        'Error creating topic',
      );
    }
  }
}

module.exports = TopicRepository;

// exports.create = async (req, res) => {
//   try {
//     const topic = req.body;
//     const topics = await TopicModel.find();
//     const found = topics.find((t) => t.title === topic.title);
//     if (typeof found === "object") {
//       res.redirect("/topics.html");
//     } else {
//       await TopicModel.insertMany(topic);
//       res.redirect("/topics.html");
//     }
//   } catch (e) {
//     debug(e);
//   }
// };

// exports.findAll = async (req, res) => {
//   try {
//     const topics = await TopicModel.find()
//       .collation({ locale: "en", strength: 2 })
//       .sort({ title: 1 });
//     res.send(topics);
//   } catch (e) {
//     debug(e);
//     res.status(500).end();
//   }
// };

// exports.findRandom = async (req, res) => {
//   try {
//     const topics = await TopicModel.find()
//       .collation({ locale: "en", strength: 2 })
//       .sort({ title: 1 });
//     res.send(topicsLib.getMultipleRandom(topics, req.params.topicsToRead));
//   } catch (e) {
//     debug(e);
//     res.status(500).end();
//   }
// };

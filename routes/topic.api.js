/* eslint-disable consistent-return */
const TopicService = require('../services/topic.service');

module.exports = (app) => {
  const service = new TopicService();

  app.post('/topics', async (req, res, next) => {
    try {
      const { title, url } = req.body;
      await service.create({ title, url });
      return res.status(200).end();
    } catch (e) {
      next(e);
    }
  });

  app.get('/topics', async (req, res, next) => {
    try {
      const topics = await service.findAll();
      return res.json(topics);
    } catch (e) {
      next(e);
    }
  });

  app.get('/topics/random/:topicsToRead', async (req, res, next) => {
    try {
      const topics = await service.findRandom(req.params.topicsToRead);
      return res.json(topics);
    } catch (e) {
      next(e);
    }
  });
};

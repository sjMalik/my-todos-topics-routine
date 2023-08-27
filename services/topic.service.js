const { TopicRepository } = require("../database");
const { APIError } = require("../utils/app-error");
const { FormatData, getMultipleRandom } = require("../utils");
const debug = require("debug")("todos:todoService");

class TopicService {
  constructor() {
    this.repository = new TopicRepository();
  }

  async create(topic) {
    try {
      const { title, url } = topic;
      const existingTopic = await this.repository.findTopic({ title });
      if (!existingTopic) {
        await this.repository.create({ title, url });
      }
    } catch (e) {
      throw new APIError("Data not found");
    }
  }

  async findAll() {
    try {
      const topics = await this.repository.findAll();
      return FormatData(topics);
    } catch (e) {
      debug(e);
      throw new APIError("Data not found");
    }
  }

  async findRandom(count) {
    try {
      const topics = await this.repository.findRandom(count);
      return getMultipleRandom(topics, count);
    } catch (e) {
      throw new APIError("Data not found");
    }
  }
}

module.exports = TopicService;

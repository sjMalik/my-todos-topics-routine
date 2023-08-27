const { TodoRepository } = require("../database");
const { FormatData } = require("../utils");
const { APIError } = require("../utils/app-error");
const debug = require("debug")("todos:service");

class TodoService {
  constructor() {
    this.repository = new TodoRepository();
  }

  async findAll() {
    try {
      const todos = await this.repository.findAll();
      return FormatData(todos);
    } catch (e) {
      throw new APIError("Data Not Found");
    }
  }

  async create(todo) {
    try {
      const { title, description } = todo;
      await this.repository.create({ title, description });
    } catch (e) {
      throw new APIError("Data not found");
    }
  }

  async findOne(id) {
    try {
      const todo = await this.repository.findOne(id);
      return FormatData(todo);
    } catch (e) {
      throw new APIError("Data not found");
    }
  }

  async update(todo) {
    try {
      const { id, title, description } = todo;
      await this.repository.update({ id, title, description });
    } catch (e) {
      throw new APIError("Data not found");
    }
  }

  async delete(id) {
    try {
      await this.repository.delete(id);
    } catch (e) {
      throw new APIError("Data not found");
    }
  }
}

module.exports = TodoService;

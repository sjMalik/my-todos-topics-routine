const debug = require("debug")("todos:repository");
const { TodoModel } = require("../models");
const { APIError, STATUS_CODE } = require("../../utils/app-error");

class TodoRepository {
  async findAll() {
    try {
      const todos = await TodoModel.find();
      return todos;
    } catch (e) {
      throw new APIError(
        "API Error",
        STATUS_CODE.INTERNAL_ERROR,
        "Unable to get Products"
      );
    }
  }

  async create({ title, description }) {
    try {
      const newTodo = new TodoModel({
        title,
        description,
      });
      await newTodo.save();
    } catch (e) {
      throw new APIError(
        "API Error",
        STATUS_CODE.INTERNAL_ERROR,
        "Unable to create todo"
      );
    }
  }

  async findOne(id) {
    try {
      const todo = await TodoModel.findOne({ _id: req.params.id });
      return todo;
    } catch (e) {
      throw new APIError(
        "API Error",
        STATUS_CODE.INTERNAL_ERROR,
        "Unable to find the todo"
      );
    }
  }

  async update({ id, title, description }) {
    try {
      const updateTodo = {
        title,
        description,
      };
      const filter = {
        _id: id,
      };
      await TodoModel.findOneAndUpdate(filter, updateTodo);
    } catch (e) {
      throw new APIError(
        "API Error",
        STATUS_CODE.INTERNAL_ERROR,
        "Unable to edit"
      );
    }
  }

  async delete(id) {
    try {
      const filter = {
        _id: id,
      };
      await TodoModel.deleteOne(filter);
    } catch (e) {
      throw new APIError(
        "API Error",
        STATUS_CODE.INTERNAL_ERROR,
        "Unable to delete"
      );
    }
  }
}

module.exports = TodoRepository;

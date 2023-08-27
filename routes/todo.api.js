const TodoService = require("../services/todo.service");
const debug = require("debug")("todos:api");

module.exports = (app) => {
  const service = new TodoService();

  app.get("/todos", async (req, res, next) => {
    try {
      const { data } = await service.findAll();
      return res.json(data);
    } catch (e) {
      next(e);
    }
  });

  app.post("/todos", async (req, res, next) => {
    try {
      const { title, description } = req.body;
      await service.create({ title, description });
      return res.status(200).end();
    } catch (e) {
      next(e);
    }
  });

  app.put("/todos/:id", async (req, res, next) => {
    const id = req.params.id;
    const { title, description } = req.body;
    try {
      await service.update({ id, title, description });
      return res.status(200).end();
    } catch (e) {
      next(e);
    }
  });

  app.delete("/todos/:id", async (req, res, next) => {
    try {
      await service.delete(req.params.id);
      return res.status(200).end();
    } catch (e) {
      next(e);
    }
  });
};

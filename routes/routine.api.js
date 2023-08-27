const RoutineService = require("../services/routine.service");

module.exports = (app) => {
  const service = new RoutineService();

  app.get("/routines", async (req, res, next) => {
    try {
      const { data } = await service.findAll();
      return res.json(data);
    } catch (e) {
      next(e);
    }
  });
};

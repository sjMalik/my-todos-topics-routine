const express = require("express");
const cors = require("cors");
const { routines, todos, topics } = require("./routes");
const HandleErrors = require("./utils/error-handler");

module.exports = async (app) => {
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(cors());
  app.use(express.static(__dirname + "/public"));

  // api
  routines(app);
  todos(app);
  topics(app);

  // error handling
  app.use(HandleErrors);
};

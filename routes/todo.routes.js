const express = require('express');

const router = express.Router();

const todoController = require('../controllers/todo.controller');

router.get('/', async (req, res) => {
  todoController.findAll(req, res);
});

router.get('/new', async (req, res) => {
  res.render('NewTodo');
});

router.get('/:id', async (req, res) => {
  todoController.findOne(req, res);
});

router.post('/new', async (req, res) => {
  todoController.create(req, res);
});

router.put('/:id', async (req, res) => {
  todoController.update(req, res);
});

module.exports = router;

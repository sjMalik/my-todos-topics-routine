const express = require('express');

const router = express.Router();
const debug = require('debug')('randomLearning:todo');

const Todo = require('../models/Todo');

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('Todo', {
      todos,
    });
  } catch (e) {
    debug(e);
  }
});

router.get('/new', async (req, res) => {
  res.render('NewTodo');
});

router.post('/new', async (req, res) => {
  const todo = req.body;
  try {
    const newTodo = new Todo({
      title: todo.title,
      description: todo.description,
    });
    const newTodoRes = await newTodo.save();
    debug(newTodoRes);
    res.redirect('/todos');
  } catch (e) {
    debug(e);
  }
});

module.exports = router;

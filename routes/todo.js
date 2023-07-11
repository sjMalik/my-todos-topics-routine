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

router.get('/:id', async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id });
  res.render('EditTodo', {
    title: todo.title,
    description: todo.description,
    id: req.params.id
  })
})

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

router.put('/:id', async (req, res) => {
  debug(`PUT /todos/${req.params.id}`, req.body);
  const todo = req.body;
  try {
    const updateTodo = {
      title: todo.title,
      description: todo.description
    };
    const filter = {
      _id: req.params.id
    }
    await Todo.findOneAndUpdate(filter, updateTodo);
    res.redirect('/todos');
  } catch (e) {
    debug(e)
  }
})

module.exports = router;

/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable func-names */
const debug = require('debug')('randomLearning:todo:controller');
const Todo = require('../models/todo.model');

exports.findAll = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.send(todos);
    } catch (e) {
        debug(e);
    }
};

exports.create = async (req, res) => {
    const todo = req.body;
    try {
        const newTodo = new Todo({
            title: todo.title,
            description: todo.description,
        });
        const newTodoRes = await newTodo.save();
        debug(newTodoRes);
        res.redirect('/todos.html');
    } catch (e) {
        debug(e);
    }
};

exports.findOne = async (req, res) => {
    const todo = await Todo.findOne({ _id: req.params.id });
    res.render('EditTodo', {
        title: todo.title,
        description: todo.description,
        id: req.params.id,
    });
};

exports.update = async (req, res) => {
    const todo = req.body;
    try {
        const updateTodo = {
            title: todo.title,
            description: todo.description,
        };
        const filter = {
            _id: req.params.id,
        };
        await Todo.findOneAndUpdate(filter, updateTodo);
        res.redirect('/todos.html');
    } catch (e) {
        debug(e);
    }
};

exports.delete = async (req, res) => {
    try {
        const filter = {
            _id: req.params.id,
        };
        await Todo.deleteOne(filter);
        res.send({ message: 'Success' });
    } catch (e) {
        debug(e);
    }
};

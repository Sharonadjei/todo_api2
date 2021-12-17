const mongoose = require('mongoose');

const todoschema = new mongoose.Schema({
    title: String,
    description: String,
    time: Date,
    isCompleted: Boolean
})

const todoModel = mongoose.model('todos',todoschema);

module.exports = todoModel;
/*
    Todo {
        title: string,
        description: string,
        completed: boolean
    }
*/

const mongoose = require("mongoose");
//mongodb url handy
// mongodb+srv://adityaagarwal2710:NV2xGfMZ03ZncZai@cluster0.rfduhve.mongodb.net/todos

mongoose.connect("mongodb+srv://adityaagarwal2710:NV2xGfMZ03ZncZai@cluster0.rfduhve.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
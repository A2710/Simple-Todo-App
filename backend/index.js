const express = require("express");
const app = express();
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todo } = require("./db");

app.use(express.json());

app.post("/todo", async function(req, res){

    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success)
    {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "todo created!",
    })

})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});

    res.json({
        todos,
    })
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body();
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success)
    {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })

        return;
    }

    //update it in mongo
    await todo.update({
        _id: req.body.id,
    },{
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(port, function() {
    console.log(`Example app listening on port http://localhost:3000/.`)
})
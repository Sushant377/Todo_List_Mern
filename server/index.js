const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo'); // Ensure path is correct

const app = express();

app.use(cors()); 
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todo_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

//api to get tasks
app.get('/gettask', (req,res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

//api to add task
app.post('/addtask', (req, res) => {
    const task = req.body.task;
    TodoModel.create({ task: task })
        .then(result => res.json(result))
        .catch(err => {
            console.error('Error saving task:', err);
            res.status(500).json(err);
        });
});

app.listen(3001, () => {
    console.log("Listening on port 3001");
});

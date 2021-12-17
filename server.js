const { request, response, json } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');

app.use(express.json());


app.get('/',(request,response)=>{
    response.status(200).json({message:"Hello Welcometo my Todo Api"});
});

app.post('/todo',todoController.addTodo);
app.get('/todo',todoController.getAllTodo);
app.patch('/todo/:todoId',todoController.updatebyid);
app.delete('/todo',todoController.deletebyid);
app.get('/todo/:todoId',todoController.getTodoById) ;
    



app.listen(PORT,() =>{
    console.log("my server is up and running on port :",PORT);
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        console.log(`DataBase not connected ${error}`);
    })
});



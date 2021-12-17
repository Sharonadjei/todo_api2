const todoModel = require('../models/todoModels')
async function addTodo(request,response){


   try {
     const newTodo =  await todoModel.create(request.body);
     response.status(200).json(newTodo);
       
   } catch (error) {
       console.log("couldnt add data",error.message);
       
   }

}
async function getAllTodo(request,response){
   try {
     const getAll = await todoModel.find();
     response.status(200).json(getAll);
   } catch (error) {
    console.log("couldnt add data",error.message);
    response.status(400);

   }  
   }
   async function getTodoById(request,response)
{
 try {
   const get1todo = await todoModel.findById(request.params.todoId);
  response.status(200).json(get1todo);
   
 } catch (error) {
  console.log("couldnt add data",error.message);
 }
}
async function updatebyid(request,response){
  try {
    const get1todo = await todoModel.findByIdAndUpdate(request.params.todoId,request.body);
    response.status(200).json(get1todo);
    
  } catch (error) {
    console.log("couldnt add data",error.message);
    
  }
   
}
async function deletebyid(request,response){
   try {
     await todoModel.findByIdAndDelete(request.params.todoId);
     response.status(200).json({message:"todo deleted"});
     
   } catch (error) {
    console.log("couldnt add data",error.message);

     
   }
}
module.exports = {
    addTodo,
    getAllTodo,
    updatebyid,
    deletebyid,
    getTodoById
}
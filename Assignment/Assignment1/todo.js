// const fs =require("fs");
// const path = require("path");
// const TODO_FILE = path.join(__dirname, "todos.json");
// console.log(TODO_FILE);

// function readTodos(){
//   const data = fs.readFileSync(TODO_FILE, "utf-8");
//   return JSON.parse(data);
// }
// function writeTodos(todos){
//   fs.writeFileSync(TODO_FILE, JSON.stringify(todos));

// }
// //add todos 
// function addTodo(task){
//   const todos = readTodos();
//   const newTodo ={
//     id : Date.now(),
//     task: task,
//     done : false

//   };
//   todos.push(newTodo);
//   writeTodos(todos);
//   console.log("Todo added:",task);
// }
// function listTodos(){
//   const todos = readTodos();
//   if(todos.length ===0){
//     console.log("No todos found.");
//     return;
//   }
//   todos.forEach((todos, index) => {

//     const status = todos.done ? "[x]" : "[ ]";
//     console.log(`${index + 1}. ${status} ${todos.task}`);
//   }
// });
// function markDone(index){
//   const todos = readTodos();
//   if(index <1 || index > todos.length){
//     console.log("Invalid index.");
//     return;
//   }
//   todos[index -1].done = true;
//   writeTodos(todos);
//   console.log("Todo marked as done:",todos[index -1].task);
// } 








const fs = require("fs");

const readTodo = function(){
    const data = fs.readFileSync("C:/Users/ril/Desktop/Backend/Backend/Assignment/Assignment1/todo.json" , "utf-8");
    return JSON.parse(data);
}

const writeTodos = function(newTodos){
    const data = fs.writeFileSync("C:/Users/ril/Desktop/Backend/Backend/Assignment/Assignment1/todo.json" , JSON.stringify(newTodos) );
    
}

function addTodo(task){
    const currentTodos = readTodo();
    const newTodo = {
        task : task,
        id : Date.now(),
        status : false,
    }
    currentTodos.push(newTodo);
    writeTodos(currentTodos);
}

addTodo("Say hi to class!");
// function sayHello() {
//   console.log("Hello, JavaScript!");
// }

// sayHello();
// sayHello();

// function functionName(){ //function name is a parameter
//     console.log("Hello, JavaScript!");
// }

// functionName(); // calling the function
// functionName(); // calling the function again


//types of functions
//1st function declarition function ko call kr sakte h bina define kiye

// function greet(){
//     console.log("Good Morning");
// }
// greet();

//2. function expression function ko call krne k liye define krna jaruri h
// const greet=function(){
//     console.log("hello everyone");
// };
// greet();

//3. arrow function short syntax for writing function expression dont have own this keyword
// const add=(x,y)=>x+y;
// console.log(add(5,3));

//4.default parameter no parameter is passed then default value is taken
// function greet(name="meenu"){
//     console.log("hello"+name);
// }
// greet();
// greet("sneha");



//5. Rest parameter  passing unlimited arguments in array
// function sum(...numbers){
//     return numbers.reduce((total,num)=>total+num,0);
// }
// console.log(sum(1,2,3,4,));

//first class citizenship
// function sayHello(){
//     return "Hello";
// }
// function greet(fn){
//     console.log(fn());
// }
// greet(sayHello);


//higer order function
// function multiplyBy(factor){
//     return function(number){
//         return number*factor;
//     };  
// }
// const multiplyBy2=multiplyBy(2);
// console.log(multiplyBy2(5));

//callback function  esa function jise dusre function k argument k roop m pass kiya jata h
// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received!");
//   }, 1000);
// }

// fetchData((msg) => console.log(msg));

//recursive function  khud ko call krne wala function
// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

//4.function scope jab ham var ko inside the function define krte h to use outside the functionaccess nahi kr sakte h wahi hota h function scope
// function test(){
//     let x=10;
//     console.log(x);
// }
// console.log(x);



//types of scope
//1.global scope visible anywhere in the code   
//2.function scope visible inside the function
//3.block scope visible inside the block{}
//4.lexical scope inner function can access the variable of outer function


//basic ques of function
// function add(a,b){
//     return a+b;
// }
// //function call
// let result=add(5,4);
// console.log(result); 
// 
// function printname(){
//     console.log("meenu");
// }
// printname();




//parameter +return
// function square(num){
//     return num*num;
// }
// console.log(square(5));


//arrow function
// const greet=(name)=>{
//     console.log("hello "+name);
// };
// console.log(greet("meenu"));






//todo basic task
// let todos=[];
// function addTodo(task){    //function decla h joki hoist support krta h
//     todos.push(task); ///push ki time com O(1)
//     console.log("Todo added:",task);
// }
// addTodo("buy a car");
// addTodo("Learn js");
// addTodo("learn node");

// //sare todo ko view karna
// function showTodos(){
//     console.log("Todo List:");
//     for(let i=0; i<todos.length; i++){
//         console.log((i+1)+". "+todos[i]);
//     }
// }

//DELETE KRNE KA  FUNCTION 
// function deleteTodo(index){
//     if(index >=0 && index<todos.length){
//         console.log("Deleted:",todos[index]);
//         todos.splice(index,1);  //o(n) time complexity
//     }else{
//         console.log("Invalid index");
//     }   }


//update krne ka function
// function updateTodo(index,newTask){
//     todo[index]=newTask;
//     }



// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const user = {
//   name: "John",
//   age: 25
// };

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname;
//   const method = req.method;

//   if (method === "GET" && pathname === "/user") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(user));
//   } 
//   else if (method === "POST" && pathname === "/data") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       fs.writeFile("./todo.json", body, () => {
//         const parsed = JSON.parse(body);
//         res.writeHead(201, { "Content-Type": "application/json" });
//         res.end(
//           JSON.stringify({
//             message: "Data received",
//             data: parsed
//           })
//         );
//       });
//     });
//   }
// });

// server.listen(3000, () => {
//   console.log("server running on http://localhost:3000");
// });



//first simple task


// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "notes.json");

// const server = http.createServer((req, res) => {
//   const url = new URL(req.url,'https://${req.headers.host}');
//   const method = req.method;
//   const pathname = url.pathname;
//   console.log(url, method);

//   if (req.method === "GET" && pathname === "/notes") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end("Welcome to Notes API");
//   }

//   if (req.method === "GET" && pathname === "/notes") {
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         res.writeHead(500);
//         return res.end("Error reading notes");
//       }

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(data);
//     });
//   }

//   else if (req.method === "POST" && pathname === "/notes") {

//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const newNote = JSON.parse(body);

//       fs.readFile(filePath, "utf8", (err, data) => {

//         const notes = data ? JSON.parse(data) : [];
//         notes.push(newNote);

//         fs.writeFile(filePath, JSON.stringify(notes), (err) => {
//           if (err) {
//             res.writeHead(500);
//             return res.end("Error saving note");
//           }

//           res.writeHead(201, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ message: "Note added" }));
//         });
//       });
//     });
//   }

//   else {
//     res.writeHead(404);
//     res.end("Route Not Found");
//   }

// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });


// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   const log = `${new Date().toISOString()} | ${req.method} | ${req.url}\n`;

//   fs.appendFile('log.txt', log, (err) => {
//     if (err) console.log(err);
//   });

//   res.end('Request done!');
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });








// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//   fs.appendFile(
//     'log.txt',
//     `${new Date().toISOString()} | ${req.method} | ${req.url}\n`,
//     console.error
//   );

//   res.end('Logged');
// }).listen(3000);


// const http = require ('http');
// const fs = require('fs'); 






// aaj se rivision jo bhi padha h exam ke liye 9 march mid term h 
// const http = require("http");
// const server = http.createServer((req , res)=>{
//   res.end("hello meenu");
// });
// server.listen(3000,()=>{
//   console.log("server running on http://localhost:3000");
// });



// sabse pahle we want to study FS module
//ak file banayi data.txt ye us file ka content padh rha h 

// const fs = require("fs");
// fs.readFile("data.txt","utf-8",(err, data)=>{
//   if(err){
//     console.log("Error:",err);
//   }else{
//     console.log("File content:",data);
//   }
// });





//write file ye purani file ka content replace kr deta h

// const fs=require("fs");
// fs.writeFile("notes.txt","hii i am meenu parashar",(err)=>{
//   if(err){
//     console.log("Error");
//   }else{
//     console.log("File written successfully");
//   }
// });





//append file ye purani file ka content replace nahi krta last me add kr deta h
// const fs=require("fs");
// fs.appendFile("notes.txt", "\n now i am learning nodejs",(err)=>{
//   if(err){
//     console.log("error");

//   }else{
//     console.log("file updated successfully");
//   }
// });



//delete file
// const fs=require("fs");
// fs.unlink("notes.txt",(err)=>{
//   if(err){
//     console.log("Error"); 
//   }else{
//     console.log("File deleted successfully");
//   }

// });

//synochronus me ye kaam seedha seedha ho jata h


//ab ham bananyenge http se server
// const http = require("http");
// const server = http.createServer((req , res)=>{
//   res.end("hello meenu");
// });
// server.listen(3000,()=>{
//   console.log("server running on http://localhost:3000");
// });

// yha tak ho gya basic server
// const http = require("http");
// const server = http.createServer((req, res)=>{
//   const method = req.method;
//   const url = req.url;
//   if(method === "GET" && uel === "/"){
//     res.writeHead(200,{"Content-Type": "text/plain"});
//     res.end("Welcome to Home Page");
//   }else if(method === "GET" && url === "/user"){
//     const users = {users: ["Alice", "Bob", "Charlie"]};
//     res.writeHead(200,{"Content-Type":"application/json"});
//     res.end(JSON.stringify(users));
//   }else if(method === "POST" && url === "/users"){
//     let body = "";
//     req.on("data", chunk =>{
//       body += chunk;
//     });
//   }
// }); halfffff h ye abhi 




const http = require("http");
const server = http.createServer((req , res)=>{
  res.end("hiii i a meenu parashar");
});
server.listen(3000,()=>{
  console.log("server running on http://localhost:3000");
});

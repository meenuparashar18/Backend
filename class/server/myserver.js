// const http =require("http");
// const server = http.createServer((req, res) => {
//     const method = req.method;
//     const url =new URL(req.url,`http://${req.headers.host}`);
//     const query = url.searchParams;
//     if(method === "GET" && url.pathname.startsWith("/users")){
//         res.end("hello user!");
//     }
//     if(method === "GET" && url.pathname.startsWith("/product")){
//         res.end("hello from the products section!");
//     }
// });
//     server.listen(3000,() => {console.log("server running on port 3000");
//     });


const http = require("http");
const fs = require("fs");
const url = require("url");

const user = {
  name: "John",
  age: 25
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  if (method === "GET" && pathname === "/user") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } 
  else if (method === "POST" && pathname === "/data") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      fs.writeFile("./todo.json", body, () => {
        const parsed = JSON.parse(body);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            message: "Data received",
            data: parsed
          })
        );
      });
    });
  }
});

server.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
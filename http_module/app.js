import http from "http";
import fs from "fs";
import { greet, circumference, areaOfCircle } from "./common.js";

console.log("hello everyone");
console.log("Start async programming");

setTimeout(() => {
  console.log("hello world");
}, 4000);

setTimeout(() => {
  console.log("MacroTask Queue");
}, 0);

greet();
circumference(10);
areaOfCircle(10);

const promise1 = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve({
      id: 220007,
      name: "Shubham Singh"
    });
  } else {
    reject({
      message: "User not found"
    });
  }
});

promise1
  .then((response) => {
    console.log("User fetched data successfully:", response);
  })
  .catch((error) => {
    console.log("User fetched data failed:", error);
  });

const server = http.createServer((req, res) => {
  fs.readFile("./page_not_found.html", "utf8", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>File not found</h1>");
      return;
    }

    res.writeHead(200, {
      "Content-Type": "text/html"
    });

    res.end(data);
  });
});

server.listen(3001, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3001");
});
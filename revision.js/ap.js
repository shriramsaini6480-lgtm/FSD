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
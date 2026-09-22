/*const fetchUserData=new Promise((resolve, reject) => {
  let success=true;
  setTimeout(() => {
  if(success){
    resolve({ id: "101", username: "shriramsaini009" });
  } else {
    reject("Failed to fetch user data");
  }
 },1000);
});
fetchUserData.then((user)=>{
    console.log(user);
 })
    .catch((err=>{
        console.log(err);
   }))*/

 const promise1=new Promise((resolve,reject)=>{
  let success=true;
  if(success){
    resolve({
      id:123456,
      username:"shriram"
    })
  }else{
    reject(new Error("Failed to fetch user data"));
  }
 })
 /*promise1.then((response)=>{
  console.log(response);
  }) 
  .catch((error)=>{
    console.log(error.message);
  })*/
 /*const promise2=new Promise((resolve,reject)=>{
  let success=true;
  if(success){
    resolve({
      id:123456,
      location:"bharat",
      name:"shriram",
      email:"shriram@example.com"
    })
  }else{
    reject(new Error("Failed to fetch user data"));
  }
 })
 /*promise2.then((response)=>{
  console.log(response);
  }) 
  .catch((error)=>{
    console.log(error.message);
  })
 promise.race([promise1,promise2])
 .then((response)=>{
  console.log(response);
  })
  .catch((error)=>{
    console.log(error);
  })*/
 const Promise1 = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve({
      id: 123456,
      username: "shriram"
    });
  } else {
    reject(new Error("Failed to fetch user data"));
  }
});

const Promise2 = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve({
      id: 123456,
      location: "bharat",
      name: "shriram",
      email: "shriram@example.com"
    });
  } else {
    reject(new Error("Failed to fetch user data"));
  }
});

Promise.any([Promise1, Promise2])
  .then((response) => {
    console.log("First resolved promise.then");
    return response
  })
  .then((response2) => {
    console.log("second resolved promise.then");
    return response2
  })
  .catch((error) => {
    console.log(error.message);
  });
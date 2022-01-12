// console.log("Hello from Node.js");

// const fs = require("fs");

// fs.writeFileSync("hello.txt", "Hellow from Node.js");


// // Create an array
// const hobbies = ['Sports', 'Cooking'];

// // Create a copy of the array (spread operator)
// const copiedArray = [...hobbies];
// hobbies[0] = "different";

// console.log(hobbies);
// console.log(copiedArray);

// // An arrow function that creates an array from the received arguments (rest operator)
// const toArray = (...args) => args;

// // Create and display an array
// console.log(toArray(1,2,3,4));


// const person = {
//     name: "Max",
//     age: 29
// };

// // "Destructuring" - Function definition only uses the 'name' field of the object
// function greetPerson({name}) {
//     console.log("Hi " + name);
// }

// greetPerson(person);

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Done!');
      }, 1500);
    });
    return promise;
  };
  
  setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
      .then(text => {
        console.log(text);
        return fetchData();
      })
      .then(text2 => {
        console.log(text2);
      });
  }, 2000);
  
  console.log('Hello!');
  console.log('Hi!');
  
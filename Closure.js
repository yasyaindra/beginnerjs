// function init() {
//   let name = "Indra";

//   function greet() {
//     console.log(`Halo ${name}`);
//   }

//   return greet;
// }

// let myFunction = init();
// myFunction();

// let counter = 0;

// let add = () => {
//   return ++counter;
// };

// console.log(add());
// console.log(add());
// counter = 23;
// console.log(add());

let add = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
counter = 122;
console.log(addCounter());

// const luasLingkaran = (jari) => {
//   return 3.14 * jari;
// };

// console.log(luasLingkaran(7));

// const createPersonWithAge = (age, person) => {
//   return { ...person, age };
// };

// const person = {
//   name: "Indra Maulana",
// };

// const newPerson = createPersonWithAge(20, person);
// const newSecondPerson = createPersonWithAge(32, person);
// console.log(person, newPerson, newSecondPerson);

// const names = ["Indra", "Afif", "Wahyu", "Brian", "Randy"];

// const namesButUsingExcMark = names.map((name) => {
//   return `${name}!`;
// });

// console.log(names, namesButUsingExcMark);

const user = {
  firstName: "Indra",
  lastName: "Yahya",
};

const fixingTheName = (user, newName) => {
  return { ...user, firstName: newName };
};

const fixedUser = fixingTheName(user, "Maulana");

console.log(fixedUser);

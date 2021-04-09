// const myMap = new Map([
//   [1, "Indra"],
//   [2, "Wahyu"],
// ]);

// console.log(myMap);

const asia = new Map([
  ["Jakarta", "Indonesia"],
  ["Kuala Lumpur", "Malaysia"],
  ["New Delhi", "India"],
]);

console.log(asia.size);
console.log(asia.get("New Delhi"));
asia.set("Thailand", "Bangkok");
console.log(asia.size);
console.log(asia);

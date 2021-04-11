// function tampilkan() {
//   console.log("Hello world");
// }

// tampilkan();

// function greeting(bahasa, nama = "admin") {
//   if (bahasa == "Indonesia") {
//     console.log(`Selamat Pagi ${nama}`);
//   } else if (bahasa == "Inggris") {
//     console.log(`Good Morning ${nama}`);
//   } else if (bahasa == "Sunda") {
//     console.log(`Selamat Pagi ${nama} tapi pake bahasa sunda`);
//   }
// }

// greeting("Inggris", "Indra");

// function perkalian(a, b) {
//   if (a > 5) {
//     return a * b;
//   } else {
//     return a + b;
//   }
// }

// console.log(perkalian(1, 9));

// Arrow Function

const sayHello = (name) => `Selamat malam ${name}`;

const sayName = () => `Halo Indra`;

console.log(sayHello("Indra"));
console.log(sayName());

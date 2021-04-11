/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO

/**
 * Hiraukan kode di bawah ini
 */

let evenNumber = [];

for (let i = 1; i <= 50; i++) {
  let numbers = i * 2;
  evenNumber.push(numbers);
}
console.log(evenNumber);

module.exports = evenNumber;

// let visitsCountMap = new WeakMap(); // Menyimpan daftar user

// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }

// let jonas = { name: "Jonas" };
// countUser(jonas); // Menambahkan user "Jonas"

// jonas = null; // Data object "Jonas" dihapus

// console.log(visitsCountMap);

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/

let visitCountMap = new Map();

function countUser(user) {
  let count = visitCountMap.get(user) || 0;
  visitCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);

jonas = null;

console.log(visitCountMap);

const mahasiswa = {
  nama: "Indra",
  jurusan: "Teknik Informatika",
  email: "indra@gmail.com",
};

let nama = "Afifan";
let jurusan = "Teknik Sipil";

console.log(jurusan);
console.log(nama);

({ nama: namaLokal, jurusan, isMale = true } = mahasiswa);

console.log(jurusan);
console.log(namaLokal);

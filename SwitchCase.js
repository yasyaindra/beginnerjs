let bahasa = "Sunda";
let salam = null;

switch (bahasa) {
  case "Indonesia":
    salam = "Selamat Pagi";
    break;
  case "Inggris":
    salam = "Good Morning";
    break;
  case "Jawa":
    salam = "Pagi pun";
    break;
  case "Sunda":
    salam = "Pagu sunda";
    break;
  default:
    salam = "Tidak tahu";
    break;
}

console.log(salam);

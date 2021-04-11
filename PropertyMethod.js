// _contacts = [];

// class Mail {
//   from = "Indra";
//   _contacts = [];
//   sendMessages = (msg, to) => {
//     console.log(`To: ${to}. ${msg}. From: ${this.from}`);
//     this._contacts.push(to);
//   };
//   tampilkanKontak = () => {
//     console.log(...this._contacts);
//   };
// }

// const mailApp = new Mail();

// mailApp.sendMessages("Anda mendapatkan hadiah", "Afifan");
// mailApp.sendMessages("Kenapa barus sekarang", "Reza");
// mailApp.sendMessages("Aku ingin pulang", "Rahmat");
// mailApp.sendMessages("Salah siapa", "Sandi");

// console.log(mailApp.contacts);

// mailApp.tampilkanKontak();

// Static Method

// class Mail {
//   static isString(words) {
//     return typeof words;
//   }
// }

// console.log(Mail.isString("Halo halo"));

// Constructor

class Mail {
  constructor(name, domain) {
    console.log(`${name} & ${domain} are initiated`);
  }
}

// const mailApp = new Mail("Indra", "@gmail.com");

console.log(new Mail("Afifan", "@yahoo.com"));

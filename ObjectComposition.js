// const genericActions = (params) => {
//   actionA: () => {
//     console.log(params);
//   };
//   actionB: () => {
//     console.log(`this is a B ${params}`);
//   };
// };

// genericActions("this is me");

// const mahasiswa = (nama, jurusan) => {
//   const state = {
//     nama,
//     jurusan,
//   };

//   const tampilkanData = (state) => {
//     console.log(state);
//   };
// };

// console.log(mahasiswa("Indra", "Teknik Informatika"));
const canSendMessages = (self) => ({
  sendMessage: () => console.log("send messages: ", self.message),
});

const checkIsValidPhone = (self) => ({
  isValid: () => console.log("send messages: ", self.message),
});

const personalEnterprise = (from, message, store) => {
  const self = {
    from,
    message,
    store,
  };

  const personalEnterpriseBehaviors = (self) => ({
    createCatalog: () => console.log("Catalog has created: ", self.store),
  });

  return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessages(self), checkIsValidPhone(self));
};

const pel = personalEnterprise("pengirim@gmail.com", "hei produk baru", "Dicoding Store");

pel.createCatalog();
pel.sendMessage();

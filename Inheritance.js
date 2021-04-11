class Mail {
  _contacts = [];
  constructor(author) {
    this.from = author;
  }
  sendMessages = function (msg, to) {
    console.log(`${this.from} send ${msg} to ${to}`);
  };
  showAllMessages() {
    return this._contacts;
  }
  addContact(name, number) {
    this._contacts.push([name, number]);
  }
}

class WhatssApp extends Mail {
  constructor(name, isBusiness, author) {
    super(author);
    this.name = name;
    this.isBusiness = true;
  }

  sendShortText = (msg, to) => console.log(`it sends by WA `, super.sendMessages(msg, to));

  sendingMessages = function () {
    return `This is WA messages from ${this.name} as ${this.isBusiness ? "Business" : "Personal"} Account`;
  };
}

const wa = new WhatssApp("Indra", true, "Facebook Inc");

wa.sendMessages("Indra", "Asasasasasas");

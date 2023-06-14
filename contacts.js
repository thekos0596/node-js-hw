const fs = require("fs").promises;
const path = require("node:path");

const contactsPath = path.basename("./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile({ contactsPath })
    .then((data) => console.log(JSON.parse(data)))
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
};

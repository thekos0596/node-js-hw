const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const listContacts = async () => {
  const dataString = await fs.readFile(contactsPath, "utf8");
  const data = JSON.parse(dataString);
  return data;
};

const getContactById = async (id) => {
  const allContacts = await listContacts();
  const contact = allContacts.find((contact) => contact.id === id);
  return contact ? contact : null;
};

const removeContact = async (id) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((contact) => contact.id === id);

  const deletedContact = allContacts[index];
  console.log("deleted contact:", deletedContact);

  if (index !== -1) {
    allContacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  }
  return deletedContact ? deletedContact : null;
};

const addContact = async (name, email, phone) => {
  const newContact = {
    id: nanoid(),
    name: name,
    email: email,
    phone: phone,
  };
  const allContacts = await listContacts();
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  console.table(allContacts);
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

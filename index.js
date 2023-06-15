const operations = require("./contacts");
const { Command } = require("commander");

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "choose action")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const data = await operations.listContacts();
      console.table(data);
      break;

    case "get":
      const contact = await operations.getContactById(id);
      console.log("getById:", contact);
      break;

    case "remove":
      await operations.removeContact(id);
      break;

    case "add":
      await operations.addContact(name, email, phone);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

invokeActions(argv);

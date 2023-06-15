const operations = require("./contacts");
const { Command } = require("commander");

const program = new Command();

program.option("-a, --action <type>", "choose action");

program.parse(process.argv);

const argv = program.opts();

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const data = await operations.listContacts();
      console.table(data);
      break;

    default:
      break;
  }
};

invokeActions(argv);

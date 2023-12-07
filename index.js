import fs from "fs/promises";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const contacts = path.join("./db", "contacts.json");
import {
  listContacts,
  getContactById,
  addContact,
  updateById,
  remContact,
} from "./contacts.js";

listContacts();
getContactById();
addContact();
updateById();
remContact();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await listContacts();
      return console.log(allContacts);
    case "getById":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);
    case "updateById":
      const updateContact = await updateById(id, { name, email, phone });
      return console.log(updateContact);
    case "removeById":
      const removeContact = await remContact(id);
      return console.log(removeContact);
    default:
      console.log("Unknown action");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "vza2RIzNGIwutCVCs4mCL" });
// invokeAction({
//   action: "add",
//   name: "mustBeeName",
//   email: "must@gmail.com",
//   phone: "765454",
// });
// invokeAction({
//   action: "updateById",
//   id: "CJwegervcol_uY208yGwm",
//   name: "mustBEEName",
//   email: "must@gmail.com",
//   phone: "3656767898",
// });
// invokeAction({
//   action: "removeById",
//   id: "CJwegervfrty485wm",
// });

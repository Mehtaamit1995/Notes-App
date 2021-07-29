// first code

// const fs = require('fs')
// //fs.writeFileSync('notes.txt', 'This is the node basics')
// fs.appendFileSync('notes.txt', ' and now we are learning appendfilesync')

// second code

// const add = require('./utils.js')
// const sum = add(5 , -3)
// console.log(sum)

// third code

// const validator = require('validator')
// const Bnotes = getnotes()

// console.log(Bnotes)

// console.log(validator.isURL('https:/adidas.io'))

// const greenmsg = chalk.inverse.bgYellow.bold.red('Error!')
// console.log(greenmsg);

// console.log(process.argv[2])

// if(command == 'add') {

//     console.log('Adding new note!')
// } else if (command == 'remove') {
//     console.log('Remove the note!')

// }
//console.log(process.argv)

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "list your note",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "read a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();

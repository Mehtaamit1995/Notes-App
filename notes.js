const chalk = require("chalk");
const fs = require("fs");

// add functionality
const addNote = (title, body) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => notes.title === title);
  
  // previous function without arrow function
  //   const duplicateNotes = notes.filter(function (note)  {
  //     return note.title === title;
  //   });

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.inverse.green("New note added!"));
  } else {
    console.log(chalk.inverse.red("note title taken!"));
  }
};

// remove functionality
const removeNote = (title) => {
  const notes = loadNotes();
  const notestosave = notes.filter((note) => note.title !== title);
  if (notes.length > notestosave.length) {
    console.log(chalk.inverse.green("note removed!"));
    saveNotes(notestosave);
  } else {
    console.log(chalk.inverse.red("no note found!"));
  }
};

// listing functionality
const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse("Your notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

//read functionality
const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.inverse.red("Note not found !"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};

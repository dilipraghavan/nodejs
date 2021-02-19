

const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
    try{
        const bufferNotes = fs.readFileSync('notes.json');    
        const notes = JSON.parse(bufferNotes);
        return notes;
    }catch(e){
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json',notes)
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.filter(
        (note) => title === note.title
    )
 
    if(duplicateNote.length === 0 ){
        notes.push(
            {
                title: title,
                body: body
            }
        );
        saveNotes(JSON.stringify(notes));
        console.log(chalk.bgGreen('Note added.'));
    }else{
        console.log(chalk.bgRed('Note already exists.'));
    }
};

const removeNote =  (title) => {
    const notes = loadNotes();
    const nonDuplicates = notes.filter(
        (note) => note.title !== title
    );
    if(nonDuplicates.length < notes.length){
        saveNotes(JSON.stringify(nonDuplicates));
        console.log(chalk.bgGreen( 'Note removed!'));
    }
    else{
        console.log(chalk.bgRed('No note found!'));
    }
};

const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.red('Your notes'));
    notes.forEach(note => {
        console.log(note.title);
    });
}



const readNote = (title)=>{
    const notes = loadNotes();
    const note = notes.find( (note) => note.title === title );

    if(!note){
        console.log(chalk.red('No note found.'));
    }else{
        console.log(chalk.italic(note.title));
        console.log(note.body);
    }

}
 

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
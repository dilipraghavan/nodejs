const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js');


// Add a note
yargs.command(
    {
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Title of the note.',
                demandOption: true,
                type: 'string'
            },
            body:{
                describe: 'Note contents.',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv){
            notes.addNote(argv.title,argv.body)
        }

    }
);

// Remove a note.
yargs.command(
    {
        command: 'remove',
        describe: 'Remove a note.',
        builder:{
            title:{
                describe: 'Title of note to be removed.',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv){
            notes.removeNote(argv.title);
        }
    }
);


// List notes.
yargs.command(
    {
        command: 'list',
        describe: 'List notes.',
        handler(){
            notes.listNotes();
        }
    }
);


// Read notes.
yargs.command(
    {
        command: 'read',
        describe: 'Read note.',
        builder:{
            title:{
                describe: 'Title of the note.',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv){
            notes.readNote(argv.title);
        }
    }
);

//console.log(yargs.argv);
//console.log(process.argv);

yargs.parse();
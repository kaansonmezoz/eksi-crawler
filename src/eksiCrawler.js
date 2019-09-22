const fs = require('fs');
const {getUserEntries} = require('./getAllUserEntries');
const yargs = require('yargs');

yargs.option('username', {
    alias: 'u', 
    describe: 'Whose entries are going to be fetch'
})
.demandOption(['username']);

const username = yargs.argv['username'];

getUserEntries(username).then((entries) => {
    let jsonString = JSON.stringify(entries, null, 2);
    console.log('Entries has been writing to the file !');
    
    if(!fs.existsSync('../entries')){
        fs.mkdirSync('../entries');
    }

    fs.writeFileSync(`../entries/${username}.json`, jsonString,'utf8');
    
    console.log('Entries has been written to the file !');
})
.catch((err) => {
    console.log(err);
})

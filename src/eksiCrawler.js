const fs = require('fs');

const {getUserEntries} = require('./getAllUserEntries');

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
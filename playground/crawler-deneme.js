const user = require('./getUserPage');

const username = "sekilli-nick"

user.getUserPage(username).then((html, err) => {
    console.log("Html: \n" + html);
    console.log("Error: \n" + err);
})

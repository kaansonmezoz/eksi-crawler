const cheerio  = require('cheerio');

const request = require('request');
const fileSystem = require('fs');

const delayRequest = 0.2 * 1000; // 0.2 seconds in miliseconds



const downloadEntries = (username) => request(`https://eksisozluk.com/biri/${username}`, {}, (error, response, body) => {
    if(error){
        console.log(`Problem with request: ${error.message}`);
        return;
    }
    console.log("Tweet has been downloaded !");

    extractedEntries = extractEntries(body);

    console.log("Written to a file !")
});


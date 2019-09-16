/*
const cheerio  = require('cheerio');

const request = require('request');
const fileSystem = require('fs');

const delayRequest = 0.2 * 1000; // 0.2 seconds in miliseconds

const downloadEntries = (username) => request(`https://eksisozluk.com/biri/${username}`, {}, (error, response, body) => {
    if(error){
        console.log(`Problem with request: ${error.message}`);
        return;
    }
    //console.log("Tweet has been downloaded !");

    //extractedEntries = extractEntries(body);

    //console.log("Written to a file !")
});

const username = "sekilli-nick";


request(`https://eksisozluk.com/biri/${username}`, {}, (error, response, body) => {
    if(error){
        console.log(`Problem with request: ${error.message}`);
        return;
    }
    //console.log("Tweet has been downloaded !");

    // div id="profile-stats-section-content" icerisinde arayacagiz
    // input type="hidden" id="no-more-data" html tagi gelene kadar entrylerini cekebilirim.


    //console.log("Written to a file !")

    //console.log(JSON.stringify(response.request));



    let $ = cheerio.load(body);
    
    let a = $("div #profile-stats-section-content")
    //let xhr = new XMLHttpRequest();

    //console.log(response.headers);

    response = response.resume(); // bu ne ise yariyor ???
    
    //console.log(response.body)

    console.log("----------------------------")

    //console.log(body);

    console.log(a.text())

    

    //console.log(a.html());


    //$ = cheerio.load(body);
    //a = $("div #profile-stats-section-content")

    //console.log(a.html());
    

    // request verileri su sekilde 
    // https://eksisozluk.com/son-entryleri?nick=sekilli%20nick&p=1&_=1568162012350
    // https://eksisozluk.com/son-entryleri?${username}&p={baslangictakiPageNumberMuhtemelen}&_=1568162012350 
    // bu son kısım bizim için önemli oradaki id ne hiç bilmiyorum. _=.... kısmı lazım bize
    // cunku her daha fazla data yükelndiğinde hem page number bir artıyor hem de o garip veri bir artıyor

});

*/





const puppeteer = require('puppeteer');
const {PendingXHR} = require('pending-xhr-puppeteer');

const username = "sekilli-nick";

var html;

// TODO: asagidaki kodu bir sekilde fonksiyon haline getirmek lazim aslında yapmamız gereken sey bu
// TODO: bir de exception firlattirmadan su while'i cozebilsek guzel olurdu aslında 

puppeteer.launch().then(async browser => {    
    const page =  await browser.newPage();
        const pendingXHR = new PendingXHR(page);

        await page.goto(`https://eksisozluk.com/biri/${username}`);        

        try{
            while(1){
                await page.click('a.load-more-entries');
                await pendingXHR.waitForAllXhrFinished();               
                
                html = await page.content();
            }
        }
        catch(error){
            console.log(html);
        }

        browser.close();
}).catch((err) => {    
    console.log(err);
});
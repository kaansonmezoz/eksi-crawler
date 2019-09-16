const puppeteer = require('puppeteer');
const fs = require('fs');


const username = "sekilli-nick";

puppeteer.launch().then(async browser => {
        const page =  await browser.newPage();

        page.on('request', request => {
            console.log(`Request Resource Type: ${request.resourceType()}`);
            console.log(`Request Url: ${request.url()}\n`);
            
        })
        
        /*
        
        page.on('response', response => {
            console.log(`Response Url: ${response.url()}`);
        })
        
        */
        
        await page.goto(`https://eksisozluk.com/biri/${username}`);        

        const htmlContent = await page.content();

        fs.writeFileSync('./deneme3.html', htmlContent);

        browser.close();
}).catch((err) => {    
    console.log(err);
});
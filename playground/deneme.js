const puppeteer = require('puppeteer');

const username = "sekilli-nick";

const browser =  puppeteer.launch().then(async browser => {
        const page =  await browser.newPage();
        await page.goto(`https://eksisozluk.com/biri/${username}`);
        
        //console.log(await pageResponse.text());

        const textHtml = await page.evaluate(() => {
            return document.querySelector("#profile-stats-section-content").innerHTML
        });

        console.log(textHtml);

        page.close();
    }).catch(err => {
        console.log(err);
    });


    


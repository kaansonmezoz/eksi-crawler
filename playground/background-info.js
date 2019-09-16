const puppeteer = require('puppeteer');

const username = "sekilli-nick";
const url = `www.eksisozluk.com/biri/${username}`;

puppeteer.launch().then(async (browser) => {
    const page = await browser.newPage();

    await page.goto(url);

    const pageContent = page.evaluate(() => {   // Getting the page content
        // we can add here to retrieve needed elements.
        // we can use document to access DOM API
        
        // Anything we call here will be executed in the page context so if we just use console.log() to print some value we can't see it.
        // We can calculate values and return a Javascript Object but if we want to return a DOM element and access it in the NodeJS context
        // we need to use evaluateHandle() method. If use evaluate and return DOM object, it will be a null object.
    });

    //   const result = await page.evaluateHandle(() => {return document.querySelectorAll('.footer-tags a')})

    // page.$() is an alias for querySelector() which is the method querySelector() on the document
    // page.$$() is an alias for querySelectorAll()
    // const innerTextOfElement = await page.$eval(selector, (element) => {element.innerText});
    // await page.click('button#submit'); performs a mouse click event on the element passed as parameter
    // await page.content() it returns HTML source of the page



    // once we are done, call browser.close()
})
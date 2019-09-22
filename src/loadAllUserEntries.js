const puppeteer = require('puppeteer');
const {PendingXHR} = require('pending-xhr-puppeteer');

const loadAllEntries = (username) => {
    return new Promise((resolve, reject) => {
        let htmlPage = "";
        
        puppeteer.launch().then(async browser => {
            const page =  await browser.newPage();
            const pendingXHR = new PendingXHR(page);    
            
            await page.goto(`https://eksisozluk.com/biri/${username}`);        

            try{
                while(1){
                    await page.click('a.load-more-entries');
                    await pendingXHR.waitForAllXhrFinished();               
                    
                    htmlPage = await page.content();
                }
            }
            catch(error){
                resolve(htmlPage);
            }
            browser.close();        
        }).catch((err) => {
            reject(err);
        })
    });
}

module.exports = {
    loadAllEntries
};
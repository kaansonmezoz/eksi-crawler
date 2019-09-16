const puppeteer = require('puppeteer');
const { PendingXHR } = require('pending-xhr-puppeteer');

const  getUserPage = (username) => {
    var html = "";
    var replicaBrowser;
    
    puppeteer.launch().then(async browser => {
        replicaBrowser = browser;    
        
        const page =  await browser.newPage();
            const pendingXHR = new PendingXHR(page);
    
            await page.goto(`https://eksisozluk.com/biri/${username}`);        
    
            while(1){
                await page.click('a.load-more-entries');
                await pendingXHR.waitForAllXhrFinished();               
                
                html = await page.content();
            }
            
            browser.close();
    }).catch((err) => {    
        replicaBrowser.close();
        console.log(err);
    });

    return html;
}

const getPage = (username) => {
    return new Promise((resolve, reject) => {
        var html = "a";
        var replicaBrowser;
        
        puppeteer.launch().then(async browser => {
            replicaBrowser = browser;    
            
            const page =  await browser.newPage();
                const pendingXHR = new PendingXHR(page);
        
                await page.goto(`https://eksisozluk.com/biri/${username}`);        
        
                while(1){
                    await page.click('a.load-more-entries');
                    await pendingXHR.waitForAllXhrFinished();               
                    
                    html = await page.content();
                }
                
                browser.close();
        }).catch((err) => {    
            replicaBrowser.close();
            resolve(html, err);
        });        
    });
}

const  getUserPageAsync = ( async (username) => {
    var html = "";
    var replicaBrowser;
    
    puppeteer.launch().then(async browser => {
        replicaBrowser = browser;    
        
        const page =  await browser.newPage();
            const pendingXHR = new PendingXHR(page);
    
            await page.goto(`https://eksisozluk.com/biri/${username}`);        
    
            while(1){
                await page.click('a.load-more-entries');
                await pendingXHR.waitForAllXhrFinished();               
                
                html = await page.content();
            }
            
            browser.close();
    }).catch((err) => {    
        replicaBrowser.close();
        console.log(err);
    });

    return html;
});



module.exports = {
    getPage: getUserPage,
    getUserPage: getPage,
    getUserPageAsync
};




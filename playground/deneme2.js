const puppeteer = require('puppeteer');
const fs = require('fs');
const { PendingXHR } = require('pending-xhr-puppeteer');


var html1;
var browser2;

const username = "sekilli-nick";

puppeteer.launch().then(async browser => {
    browser2 = browser;    
    
    const page =  await browser.newPage();
        const pendingXHR = new PendingXHR(page);

        await page.goto(`https://eksisozluk.com/biri/${username}`);        
        puppeteer.launch().then(async browser => {
            browser2 = browser;    
            
            const page =  await browser.newPage();
                const pendingXHR = new PendingXHR(page);
        
                await page.goto(`https://eksisozluk.com/biri/${username}`);        
                
                //let click = true;
                
                // en mantıklısı bu 
        
                while(1){
                    await page.click('a.load-more-entries');
                    await pendingXHR.waitForAllXhrFinished();               
                    
                    html1 = await page.content();
                }
        
        
            /*      yemedi !
        
                while(click){
                    page.click('a.load-more-entries').then(async() => {
                        await pendingXHR.waitForAllXhrFinished();
                    }).catch(async (err) => {
                        click = false;
                        
                        let htmlContent = await page.content();        
                        fs.writeFileSync('./deneme2.html', htmlContent);
        
                        console.log(err);
                    })
                    
                }
            
            */
                /*
                await page.click('a.load-more-entries');
                await pendingXHR.waitForAllXhrFinished();            
                
                await page.click('a.load-more-entries');
                await pendingXHR.waitForAllXhrFinished();            
        
                await page.click('a.load-more-entries');
                await pendingXHR.waitForAllXhrFinished();            
        
                await page.click('a.load-more-entries');
                await pendingXHR.waitForAllXhrFinished();            
        
                await page.click('a.load-more-entries');
                await pendingXHR.waitForAllXhrFinished();            
        
                await page.click('a.load-more-entries');
                await pendingXHR.waitForAllXhrFinished();            
        
                */
        
                //let htmlContent = await page.content();
                    
                //fs.writeFileSync('./deneme2.html', htmlContent);
                
                browser.close();
        }).catch((err) => {    
            console.log(err);
            
            fs.writeFileSync('./deneme2.html', html1);
        
            browser2.close();
        
        });
        
        
            
        
        
        //let click = true;
        
        // en mantıklısı bu 

        while(1){
            await page.click('a.load-more-entries');
            await pendingXHR.waitForAllXhrFinished();               
            
            html1 = await page.content();
        }


    /*      yemedi !

        while(click){
            page.click('a.load-more-entries').then(async() => {
                await pendingXHR.waitForAllXhrFinished();
            }).catch(async (err) => {
                click = false;
                
                let htmlContent = await page.content();        
                fs.writeFileSync('./deneme2.html', htmlContent);

                console.log(err);
            })
            
        }
    
    */
        /*
        await page.click('a.load-more-entries');
        await pendingXHR.waitForAllXhrFinished();            
        
        await page.click('a.load-more-entries');
        await pendingXHR.waitForAllXhrFinished();            

        await page.click('a.load-more-entries');
        await pendingXHR.waitForAllXhrFinished();            

        await page.click('a.load-more-entries');
        await pendingXHR.waitForAllXhrFinished();            

        await page.click('a.load-more-entries');
        await pendingXHR.waitForAllXhrFinished();            

        await page.click('a.load-more-entries');
        await pendingXHR.waitForAllXhrFinished();            

        */

        //let htmlContent = await page.content();
            
        //fs.writeFileSync('./deneme2.html', htmlContent);
        
        browser.close();
}).catch((err) => {    
    console.log(err);
    
    fs.writeFileSync('./deneme2.html', html1);

    browser2.close();

});


    


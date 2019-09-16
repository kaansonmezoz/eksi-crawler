const cheerio  = require('cheerio');

const getUserEntry = (divTopicItem) => {
    // html div class="topic-item" olan bir html tagi.
    
    let $ = cheerio.load(divTopicItem);
    
    let userId = $("li").attr("data-id");
    let username = $("li").attr("data-author");
    let topic = $("h1").text();
    let entry = $("div").text(); // bu div'in div class = "content" seklinde olan bir childi olmasini bekliyoruz
    let date = $("div .info").find("a").first().text(); // div class = info icerisindeki iki tane a tag'inden ilkinin dönmesini saglar.

    return {
        userId,
        username,
        topic,
        entry,
        date
    };    
};

module.exports = {
    getUserEntry
}
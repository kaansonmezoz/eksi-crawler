const getEntry = require('./getEntry');


// TODO: burada user'a ait olan butun entryleri taramasi lazim. taradiktan sonra da ilgili yerei çağırıp ondan bir şeyler elde etmek lazim.

// TODO: her daha fazla göstere tıklandığında <div id="topic"> olan yeni bir divler butunu olusuyor en temizi en sona gidip butun div id="topic"
// TODO: leri olusturmak daha sonra da en son elimizde olan html ile bütün topicleri dolasırız.

const getUserEntries = (url) => {
    var entries = []

    // TODO: some magic happened here
    
    let topicDiv = null;

    var entry = getEntry(topicDiv);
}
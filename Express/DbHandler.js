const MongoClient = require('mongodb').MongoClient; 

class DbHandler
{
    constructor(url)
    {
        this.url = url; 
        this.client = null;
    }

    async connect()
    {
        this.client = await MongoClient.connect(this.url);
        console.log("Connected to DB");
    }

    async getCollection(name)
    {
        return this.client.collection(name);
    }
}

module.exports = DbHandler;
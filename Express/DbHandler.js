const MongoClient = require('mongodb').MongoClient; 

class DbHandler
{
    constructor(url)
    {
        this.url = url; 
        this.client = new MongoClient(url);
    }

    async connect()
    {
        this.client = await this.client.connect(this.url);
        console.log("Connected to DB");
    }

    async getCollection(name)
    {
        return this.client.collection(name);
    }
}

module.exports = DbHandler;
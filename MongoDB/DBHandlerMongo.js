const { MongoClient } = require('mongodb');

class DBHandlerMongo 
{
  constructor(url = 'mongodb://localhost:27017', dbName = 'myproject') 
  {
    this.dburl = url + '/' + dbName; 
    this.conn =  null;
  }

  async connect()
  {
    this.conn = await MongoClient.connect(this.dburl); 
  }  

  async close()
  {
    this.conn.close();
  }

  async getCollection(name)
  {
    if(!this.conn)
    {
        await this.connect();
    }
    if(this.conn instanceof MongoClient)
    {
        return this.conn.db().collection(name);
    }
  }
}

module.exports = DBHandlerMongo;

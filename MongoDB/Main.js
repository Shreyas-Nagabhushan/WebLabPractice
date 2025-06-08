/*
    sudo apt install mongodb
    sudo systemctl status mongodb
    sudo systemctl start mongodb
    
    -----

    To check mongodb connection status
    mongo --eval 'db.runCommand({ connectionStatus : 1 })'
*/

// const { MongoClient } = require('mongodb');

// async function testMongoConnection() {
//   const url = 'mongodb://localhost:27017';  // default MongoDB URL
//   const client = new MongoClient(url);

//   try {
//     await client.connect();
//     console.log('Connected to MongoDB server successfully!');
//   } catch (err) {
//     console.error('Failed to connect to MongoDB server:', err.message);
//   } finally {
//     await client.close();
//   }
// }

// testMongoConnection();

var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/myproject';

function insertDocuments(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    // assert.equal(err, null);
    // assert.equal(3, result.result.n);
    // assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) 
{
  if (err) throw err;

  console.log("Connected correctly to server");

  insertDocuments(db, function() {
      console.log("Inserted 3 documents into the collection");
      db.close();
  })
});
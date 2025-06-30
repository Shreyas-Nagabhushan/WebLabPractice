const express = require("express");
const { MongoClient } = require("mongodb"); 

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

let collection; 
const statusTypes = {
    PENDING: 1, 
    RESOLVED: 2
};

(async function()
{
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const dbName = 'cs139';

    await client.connect();
    const db = client.db(dbName);
    collection = db.collection('complaints');

    app.listen(3000, (err) =>
    {
        if (err)
        {
            console.error("Error starting server:", err);
        }
        else
        {
            console.log("Server running...");
        }
    });
})()

app.get("/", (req, res) => 
{
    res.sendFile(__dirname + "/" + "complaint.html"); 
})

app.get("/pending",async (req, res) => 
{
    let complaints = await collection.find({status: "pending"}); 
    complaints = await complaints.toArray(); 
    console.log(complaints);
    res.send(complaints); 
}); 

app.post("/submit",async (req, res) => 
{
    console.log("Came to submit");
    const body = req.body; 

    const id = body.id; 
    const status = body.status; 
    const title = body.title; 

    await collection.insertOne({id: id.toString(), title: title, status: status}); 
    res.send("complaint submitted"); 
}); 

app.put("/update/:id/:status", async(req, res) => 
{
    const id = req.params.id; 
    const status = req.params.status; 

    await collection.updateOne({id: id.toString()}, {$set: {status: status}}); 

    res.send("Updated successfully");
});

app.put("/clearAll", async(req, res) => 
{
    await collection.deleteMany({});
    res.send("Done"); 
})

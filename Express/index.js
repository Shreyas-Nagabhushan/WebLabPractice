/*
Using Node.js Express and Mongo, implement a program to accept USN, Name, Subject_code,
CIE marks and store the information in a database and display students whose CIE<20.
*/

const express = require("express");  
const DbHandler = require("./DbHandler");

const app = express(); 
const PORT = 3000; 

app.use(express.json());

(async ()=> 
{
    const dbHandler = new DbHandler("mongodb://localhost:27017/cs139"); 
    await dbHandler.connect();

    app.get("/", (req, res) => 
    {
        res.sendFile(__dirname + "/public/form.html"); 
    });

    app.get("/stalk", async (req, res) =>
    {
        const student = await dbHandler.getCollection("Student"); 

        const t = await (await student.find({marks : {$lt : 27}})).toArray(); 
        res.send(t);
    });

    app.post("/addStudent", async (req, res) => 
    {
        console.log(req.body);
        const student = await dbHandler.getCollection("Student"); 
        await student.insertOne(req.body); 
        const t = await student.find({}).toArray(); 
        console.log(t);
        res.send("OK");
    })

    app.listen(PORT, (error) => 
    {
        if(error)
            console.log(error);
        else
            console.log("Server running");
    })
})()


const DBHandlerMongo = require('./DBHandlerMongo');

(async () => {
  const dbHandler = new DBHandlerMongo();
  const students = await dbHandler.getCollection("students"); 

  await students.insertOne({ name: "shr", age: 21 }); 

  const all = await students.find({age : {$in : [25, 21]}}).toArray(); 
  console.log(all);

  await dbHandler.close();
})();

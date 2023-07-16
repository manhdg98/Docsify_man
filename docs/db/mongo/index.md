### Mongo pull from Docker Hub

access env mongo in container:
```shell
mongosh
```

```js
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// backup
// mongodump --db school --out backup

// restore
// mongorestore --db school  backup/school

// The current database to use.
use('school');

// Create a new document in the collection.

// db.getCollection('students').insertOne(
//     {
//         "name": "Manh",
//         "age": 24,
//         "gpa": 1.5,
//         "fulltime": false,
//         "registerDate": new Date(),
//         "gradutionDate": null,
//         "course": ["Biology", "Calculate", "Chem"],
//         "address": {
//             "street": "123 Fakt St",
//             "city": "Ha Noi",
//             "zip": 12345
//         }
//     }
// );

// db.getCollection('students').insertMany([
//     {
//         "name": "Patrick",
//         "age": 18,
//         "gpa": 1.5
//     },
//     {
//         "name": "Patrick 2",
//         "age": 10,
//         "gpa": 1.9
//     },
//     {
//         "name": "Patrick 3",
//         "age": 24,
//         "gpa": 2.5
//     }
// ]);

// db.getCollection('students').find();

//sort
// db.getCollection('students').find().sort({"name": 1});
// db.getCollection('students').find().sort({"gpa": -1});

//limit
// db.getCollection('students').find().limit(2)

// eplain query
// db.getCollection('students').find().sort({"gpa": -1}).limit(2).explain()

// db.students.find({query}, {projection});
// db.getCollection('students').find({}, {_id: false, name: true, gpa: true})

// update
// db.students.updateOne(
//     { name: "Manh" },
//     { $set: { fulltime: true } }
//  )

// delete 1 field
// db.students.updateOne(
//     { name: "Manh" },
//     { $unset: { fulltime: "" } }
// )

// updateMany
// db.students.updateMany({}, {$set: {fulltime: false}})
// db.students.updateMany({fulltime: {$exists: false}}, {$set: {fulltime: true}})

// deleteOne
// db.students.deleteOne({name: "Larry"})

// delete Many
// db.students.deleteMany({fulltime: false})
// db.students.deleteMany({registerDate: {$exists: false}})

// MongoDB Query Operators
// There are many query operators that can be used to compare and reference document fields.

// Comparison
// The following operators can be used in queries to compare values:

// $eq: Values are equal
// $ne: Values are not equal
// $gt: Value is greater than another value
// $gte: Value is greater than or equal to another value
// $lt: Value is less than another value
// $lte: Value is less than or equal to another value
// $in: Value is matched within an array
// Logical
// The following operators can logically compare multiple queries.

// $and: Returns documents where both queries match
// $or: Returns documents where either query matches
// $nor: Returns documents where both queries fail to match
// $not: Returns documents where the query does not match
// Evaluation
// The following operators assist in evaluating documents.

// $regex: Allows the use of regular expressions when evaluating field values
// $text: Performs a text search
// $where: Uses a JavaScript expression to match documents
// MongoDB Update Operators
// There are many update operators that can be used during document updates.

// Fields
// The following operators can be used to update fields:

// $currentDate: Sets the field value to the current date
// $inc: Increments the field value
// $rename: Renames the field
// $set: Sets the value of a field
// $unset: Removes the field from the document
// Array
// The following operators assist with updating arrays.

// $addToSet: Adds distinct elements to an array
// $pop: Removes the first or last element of an array
// $pull: Removes all elements from an array that match the query
// $push: Adds an element to an array

// db.students.find({name: {$ne: "Spongebob"}})
// db.students.find({age: {$lte: "Spongebob"}})
// db.students.find({$and: [{fullTime: false}, {age: {$lte: 22}}]})

// create index
// db.students.createIndex({name: 1})
// db.students.find({name: "Manh"}).explain('executionStats');
// db.students.getIndexes();

// create collecntion
db.createCollection("teacher", {capped: true, size: 10000000, max: 100})
 
```
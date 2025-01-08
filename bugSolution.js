```javascript
// Correct use of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({ _id: ObjectId('...') }, { $inc: { count: 1 } });
```
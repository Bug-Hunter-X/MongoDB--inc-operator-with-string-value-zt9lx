# MongoDB $inc operator with string value

This example demonstrates an uncommon error that can occur when using the `$inc` operator in MongoDB update operations.  The issue arises when a string value is provided to the `$inc` operator instead of a numeric value. This will not produce an error, but the update will not occur as expected.

## Bug

The following code attempts to increment the `count` field in a document by 1. However, due to the use of the string '1', the operation fails silently.

```javascript
// Incorrect use of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({ _id: ObjectId('...') }, { $inc: { count: '1' } });
```

## Solution

To correctly increment the `count` field, the value provided to the `$inc` operator must be a number (integer or float):

```javascript
db.collection('myCollection').updateOne({ _id: ObjectId('...') }, { $inc: { count: 1 } });
```

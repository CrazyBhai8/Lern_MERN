# MongoDB Basics

## What is MongoDB?
MongoDB is a popular NoSQL database that stores data in a flexible, JSON-like format called **documents**. Unlike traditional relational databases, MongoDB organizes data into **collections** (like tables) and **documents** (like rows). Here's why MongoDB is widely used:

- **Flexible Schema**: Each document in a collection can have a different structure, so there’s no need to predefine a strict schema.
- **Scalability**: Supports horizontal scaling, making it easy to distribute data across multiple servers.
- **High Performance**: Optimized for fast data reads and writes.
- **Rich Query Support**: Provides powerful filtering, sorting, and data manipulation options.
- **Modern Use Cases**: Commonly used in web applications, IoT systems, and big data projects.

---

## Common MongoDB Commands

### Basic Commands
1. **Connect to MongoDB**:
   ```bash
   mongo
   ```
   Opens the MongoDB shell to interact with the database.

2. **Show All Databases**:
   ```bash
   show dbs
   ```
   Lists all available databases.

3. **Switch or Create a Database**:
   ```bash
   use <database_name>
   ```
   Switches to a database or creates it if it doesn’t exist.

4. **Show Collections**:
   ```bash
   show collections
   ```
   Lists all collections in the current database.

---

### CRUD Operations (Create, Read, Update, Delete)

#### Insert a Document
```javascript
db.<collection_name>.insertOne({ key: "value" })
```
Example:
```javascript
db.users.insertOne({ name: "Alice", age: 25 })
```

#### Find Documents
- Find All Documents:
  ```javascript
  db.<collection_name>.find()
  ```
- Find with a Condition:
  ```javascript
  db.<collection_name>.find({ key: "value" })
  ```
  Example:
  ```javascript
  db.users.find({ age: 25 })
  ```

#### Update Documents
```javascript
db.<collection_name>.updateOne({ key: "value" }, { $set: { newKey: "newValue" } })
```
Example:
```javascript
db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } })
```

#### Delete Documents
- Delete One Document:
  ```javascript
  db.<collection_name>.deleteOne({ key: "value" })
  ```
- Delete Multiple Documents:
  ```javascript
  db.<collection_name>.deleteMany({ key: "value" })
  ```

---

### Administrative Commands

#### Drop a Collection
```javascript
db.<collection_name>.drop()
```

#### Drop a Database
```javascript
db.dropDatabase()
```
---
## Query and Projection Operators
https://www.mongodb.com/docs/manual/reference/operator/query/

Here’s a summary of key **Query and Projection Operators** from MongoDB:

---

### **Query Operators**
These operators help define conditions for retrieving data:

| Operator       | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `$eq`          | Matches values equal to a specified value.                                 |
| `$ne`          | Matches values not equal to a specified value.                             |
| `$gt`          | Matches values greater than a specified value.                             |
| `$gte`         | Matches values greater than or equal to a specified value.                 |
| `$lt`          | Matches values less than a specified value.                                |
| `$lte`         | Matches values less than or equal to a specified value.                    |
| `$in`          | Matches any of the values in an array.                                     |
| `$nin`         | Matches none of the values in an array.                                    |
| `$and`         | Joins query clauses with a logical AND.                                     |
| `$or`          | Joins query clauses with a logical OR.                                      |
| `$not`         | Inverts the effect of a query expression.                                  |
| `$regex`       | Matches strings that satisfy a regular expression.                         |
| `$exists`      | Matches documents that have a specified field.                             |
| `$size`        | Matches arrays with a specified number of elements.                        |

---

### **Projection Operators**
These are used to include or exclude fields in the query results:

| Operator       | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `$`            | Projects the first element of an array that matches the query condition.     |
| `$elemMatch`   | Projects the first matching element from an array of documents.             |
| `$meta`        | Projects metadata like text search scores.                                 |
| `$slice`       | Limits the number of elements in an array returned in the query result.     |

---

# Mongoose

### What is Mongoose?

Mongoose is a **JavaScript library** that helps you interact with **MongoDB**, a NoSQL database. It makes it easier to work with MongoDB by providing a schema-based structure for your data.

### Key Features:
- **Schema**: Define the structure of your data (e.g., what fields it should have).
- **Model**: Create models to interact with your database (for creating, reading, updating, and deleting data).
- **Validation**: Automatically checks if the data is correct before saving it.
- **Middleware**: Run functions before or after actions like saving data.

### Example:
```javascript
import mongoose from 'mongoose';

// Define schema
const userSchema = new mongoose.Schema({
  name: String
  name: { type: String, required: true }, // also write like this and this is best practice.
  age: { type: Number, required: true },
});

// Create model
const User = mongoose.model('User', userSchema);

// Create and save user
const newUser = new User({ name: 'John', age: 30 });
newUser.save().then(() => console.log('User saved!'));
```

---
## timestamp vs timestamps
In Mongoose, `timestamp` and `timestamps` refer to related concepts, but they are used in different contexts:

### 1. **`timestamp`** (Singular):
- This is a **field type** that can be used in a schema. It stores a **single timestamp** (date/time) for a specific event or action.
- Example:
  ```javascript
  const mySchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now }
  });
  ```

### 2. **`timestamps`** (Plural):
- This is a **schema option** that automatically adds **two fields** (`createdAt` and `updatedAt`) to your documents. It helps track when a document is created and when it was last updated.
- Example:
  ```javascript
  const mySchema = new mongoose.Schema({
    name: String,
  }, { timestamps: true });
  // Automatically adds `createdAt` and `updatedAt` fields
  ```

### Key Difference:
- **`timestamp`** is a custom field where you can store a single date.
- **`timestamps`** is a built-in option that automatically adds `createdAt` and `updatedAt` fields to every document.

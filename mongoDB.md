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

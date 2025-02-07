# JavaScript: Callbacks, Promises, Async/Await & File System

## Concepts Covered

### 1. Callbacks

Callbacks are functions passed as arguments to other functions to be executed later. They are commonly used for asynchronous operations.

### 2. Promises

A promise represents a value that might be available now, in the future, or never. It has three states: **pending, fulfilled, or rejected**.

### 3. Async/Await

`async` functions allow the use of `await`, which pauses execution until a promise is resolved or rejected.

### 4. File System (fs module)

Node.js provides a built-in `fs` module to work with the file system, including reading, writing, and deleting files.

#### Writing to a file:

```javascript
fs.writeFile("example.txt", "Hello, World!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully");
});
```

#### Reading a file:

```javascript
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
```

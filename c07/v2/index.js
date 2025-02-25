const express = require("express");

const {
  getStudents,
  addStudent,
  editStudent,
  deleteStudent,
} = require("./handlers/students");
const app = express();

app.use(express.json());

app.get("/students", getStudents);
app.post("/students", addStudent);
app.put("/students/:id", editStudent);
app.delete("/students/:id", deleteStudent);

app.listen(3000, () => console.log("Server listening at port 3000!"));

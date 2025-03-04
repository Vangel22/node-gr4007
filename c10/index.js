const express = require("express");
const {
  getForm,
  postForm,
  getStudents,
  deleteStudents,
} = require("./controllers/formular");
const { listTest } = require("./models/students");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/form", getForm);

app.post("/form", postForm);

app.get("/students", getStudents);

app.get("/brishi", deleteStudents);

async function testing() {
  const result = await listTest();

  console.log(result);
}
testing();

app.listen(3000, () => console.log("Server started at port 3000!"));

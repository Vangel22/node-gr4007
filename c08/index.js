const express = require("express");
const { getCalculator, postCalculator } = require("./controllers/calculator");
const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));
// Example form data: name=John&hobbies=sports&hobbies=music

// app.use(express.urlencoded({ extended: true }));
// Example form data: name=John&hobbies[]=sports&hobbies[]=music

app.get("/calculator", getCalculator);
app.post("/calculator", postCalculator);

app.listen(3000, () => console.log("Server running at port 3000!"));

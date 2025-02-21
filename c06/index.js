// Infrastrukturen kod
const express = require("express");
const http = require("http");

const {
  handleWelcome,
  handleUser,
  handleNotFound,
} = require("./handlers/handlers");

const app = express();

app.use(express.json());
// const parsedData = JSON.parse(req.body);

// Kako pravevme so http
// const server = http.createServer((req, res) => {
//     if(req.url === "/") {
//         res.end("Hello World")
//     }
// })

// HTTP get metod
// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

app.get("/", handleWelcome);

app.get("/home", (req, res) => {
  res.send("I am home!");
});

app.post("/user", handleUser);

app.listen(3000, () => console.log("Server is running at 3000!"));

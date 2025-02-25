// Infrastrukturen kod
const express = require("express");
const http = require("http");

const {
  handleWelcome,
  handleUser,
  handleNotFound,
  handleConvertMilesToKm,
} = require("./handlers/handlers");

const app = express();

// app = {
//   use: (param) => {
//     return 0;
//   }, // middleware
//   get: (ruta, handler) => {}, // get baranje
// };

app.use(express.json());

// Middlewares - se pisuvaat prvi vo fajlot kaj logikata, bidejki redosledot e biten za nivno pravilno izvrsuvanje
app.use((req, res, next) => {
  // Ovde sum: rezultat na toa sto sum kliknal na rutata /car/mercedes/2022
  console.log(
    `Време: ${new Date().toLocaleString()}, Метод: ${req.method}, Патека: ${
      req.path
    }`
  );
  next(); // mi ovozmozuva da vlezam vo app.get("/car/:make/:year") endpointot (rutata) i nepreceno da ja izvrsam
});
// Presretni gi site baranja koi sodrzat req.body, zemi si gi site chunkovi, parsiraj gi i stavi gi vo req.body kako JS objekt

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

app.get("/not-found", handleNotFound);

app.post("/convert", handleConvertMilesToKm);

// query parametri
app.get("/search", (req, res) => {
  const name = req.query.name;
  const page = req.query.page || 1;

  const firstname = req.query.firstname;
  // http://localhost:3000/search?name=vangel&page=2&firstname=Ana

  res.send(`Пребаруваме за ${name}, страница ${page}`);
});

// Dinamicen parametar :id
// So koe ime e definiran dinamicniot parametar so toa ime go pristapuvame preku req.params
// /user/1
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;

  res.send(`Податоци за корисник со ID: ${userId}`);
});

app.get("/users/:identifier", (req, res) => {
  const userId = req.params.identifier;

  res.send(`Податоци за корисник со ID: ${userId}`);
});

// Primer so poveke dinamicni parametri
app.get("/car/:make/:year", (req, res) => {
  const { make, year } = req.params;

  res.send(`Податоци за автомобил, бренд ${make}, година ${year}`);
});

// Middleware
function authenticate(req, res, next) {
  const isAdmin = false;

  if (isAdmin) {
    next();
  } else {
    res.status(401).send("Неовластен пристап!");
  }
}

app.get("/admin", authenticate, (req, res) => {
  res.send("Добредојдовте, администратор!");
});

app.listen(3000, () => console.log("Server is running at 3000!"));

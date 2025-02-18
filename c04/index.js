const http = require("http");
const { convertMilesToKm, fahrenheitToCelsius } = require("./convert");

// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/registriraj-korisnik") {
//     console.log("telo na baranjeto", req.body);
//     res.end("Hello, i am home");
//   } else if (req.url === "/download") {
//     res.end("Downloading...");
//   } else {
//     res.end("I am lost");
//   }
// });

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/convert") {
    //   console.log("telo na baranjeto", req.body);

    let data = "";

    req.on("data", (chunk) => {
      //   console.log("chunk", chunk);

      data += chunk;
    });

    req.on("end", () => {
      try {
        // JSON.parse -> ke go napravi json vo JS objekt
        // JSON.stringify -> ke napravi JS objekt vo JSON format
        const parsedData = JSON.parse(data);
        console.log("parsed data", parsedData); // { miles: 10 }
        // convert miles to kilometers
        const convertedVal = convertMilesToKm(parsedData.miles);

        res.writeHead(200, { "content-type": "text/plain" });
        res.end(`${parsedData.miles} to km: ${convertedVal}`);
      } catch (err) {
        console.log(err);
        res.writeHead(400, { "content-type": "text/plain" });
        res.end("Invalid input");
      }
    });
  } else if (req.method === "POST" && req.url === "/to-celsius") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      try {
        const parsedData = JSON.parse(data);
        console.log("parsed data", parsedData); // { fahrenheit: 10 }
        const convertedVal = fahrenheitToCelsius(parsedData.fahrenheit);

        res.writeHead(200, { "content-type": "text/plain" });
        res.end(
          ` ${parsedData.fahrenheit} fahrenheit to celsius: ${convertedVal}`
        );
      } catch (err) {
        console.log(err);
        res.writeHead(400, { "content-type": "text/plain" });
        res.end("Invalid input");
      }
    });
  } else {
    res.end("I am lost");
  }
});

// const server = http.createServer((req, res) => {
//   switch (req.url) {
//     case "/home":
//       res.end("Hello i am home");
//       break;
//     case "/download":
//       res.end("Downloading...");
//       break;
//     default:
//       res.end("I am lost");
//       break;
//   }
// });

// HTTP ima nekolku metodi
// 1. GET -> default metod i go koristime za povlekuvanje podatoci, NEMA TELO
// 2. POST -> pravenje na nov zapis, podatoci imame vo request.body
// 3. PUT -> azuriranje na postoecki zapis, podatoci imame vo request.body
// 4. DELETE -> brisenje na postoecki zapis, podatoci imame vo request.body no opcionalno

// CRUD - Create, read, update, delete

// server.listen(8080, () => console.log("Server is running"));

const handler = (req, res) => {
  if (req.url === "/home") {
    return res.end("Jas sum doma!");
  }
  // /sobiranje/2/2 -> 4
  // /odzemanje/2/2 -> 0
  const [_, op, num1, num2] = req.url.split("/"); // url-to sekogas e string (SEKOJ PODATOK)
  // const myurl = req.url.split("/");
  // console.log('my url', myurl); // ["", "sobiranje", "2", "2"];

  let result;
  switch (op) {
    case "sobiranje":
      result = Number(num1) + Number(num2);
      res.end(`${result}`);
      break;
    case "odzemanje":
      result = Number(num1) - Number(num2);
      res.end(`${result}`);
      break;
    case "mnozenje":
      result = Number(num1) * Number(num2);
      res.end(`${result}`);
      break;
    case "delenje":
      result = Number(num1) / Number(num2);
      res.end(`${result}`);
      break;
    default:
      res.end("Calculator!");
      break;
  }
};

const newServer = http.createServer(handler);

newServer.listen(8080, () => console.log("Server is listening on port 8080"));

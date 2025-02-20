// Email: ^[a-z0-9.+_-]+\@[a-z]+\.[a-z.]+$
// Password: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!%$#^&*])[A-Za-z\d@!%$#^&*]{8,}$

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/register") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const parsedData = JSON.parse(data);
      // parsedData.email parsedData.password
      const emailRegex = /^[a-z0-9.+_-]+\@[a-z]+\.[a-z.]+$/g;
      const passwordRegex =
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!%$#^&*])[A-Za-z\d@!%$#^&*]{8,}/g;
      //   const emailRegex = new RegExp("^[a-z0-9.+_-]+@[a-z]+.[a-z.]+$");
      if (
        emailRegex.test(parsedData.email) &&
        passwordRegex.test(parsedData.password)
      ) {
        res.end("Regex is good!");
      } else {
        res.end("Regex has mistake in email or password!");
      }
    });
  }
});

server.listen(3000, () => console.log("Server is running at port 3000"));

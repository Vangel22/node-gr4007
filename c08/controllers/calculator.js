const fs = require("fs");

const getCalculator = async (req, res) => {
  try {
    const output = await parseTemplate("calculator_form");
    return res.status(200).send(output);
  } catch (err) {
    return res.status(500).send("Invalid server error!");
  }
};

const postCalculator = async (req, res) => {
  try {
    const { numberOne, numberTwo, operation } = req.body;

    if (numberOne === "" || numberTwo === "") {
      return res.status(400).send("Bad request!");
    }

    let result = "";

    switch (operation) {
      case "sobiranje":
        result = `${Number(numberOne) + Number(numberTwo)}`;
        break;
      case "odzemanje":
        result = `${Number(numberOne) - Number(numberTwo)}`;
        break;
      case "delenje":
        result = `${Number(numberOne) / Number(numberTwo)}`;
        break;
      case "mnozenje":
        result = `${Number(numberOne) * Number(numberTwo)}`;
        break;
      default:
        result = "Nepoznat operator!";
    }

    const output = await parseTemplate("calculator", {
      data: result,
      ime: "Semos",
    });

    // data: "5"
    // ime: "Semos"

    return res.status(200).send(output);
  } catch (err) {
    return res.status(500).send("Invalid server error!");
  }
};

// calculator.html
// calculator-form.html
const parseTemplate = async (template, data = null) => {
  // data: "2"
  // ime: "Semos"
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        if (err) return reject(err);

        if (data) {
          // {{data}} -> mesto kade mozeme da napravime regex

          for (const podatok in data) {
            // d e klicot, klucot se zamenuva taka sto imame match
            // d vo prva iteracija e data
            // vo prva iteracija data izgleda vaka {{data}}
            // d vo vtora iteracija e {{ime}}
            // data.data
            // data.ime
            console.log("Kluc", podatok);
            console.log("Vrednost", data[podatok]);

            content = content.replace(`{{${podatok}}}`, data[podatok]);
          }
        }

        return resolve(content);
      }
    );
  });
};

// __dirname - e momentalniot direktorium vo koj se naogja ovoj fajl (calculator.js)

module.exports = {
  getCalculator,
  postCalculator,
};

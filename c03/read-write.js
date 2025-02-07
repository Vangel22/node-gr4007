// Zadaca, zadadete potrebni parametri za da imame dinamicno ime na fajl za write i read
// dinamicen parametar za data pri zapisuvanje
// Treba da napravite lokalen modul read-write.js i da gi eksportirate funkciite vo index.js
const fs = require("fs");

const read = (fileName) => {
  return new Promise((success, fail) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return fail(err);
      success(data);
    });
  });
};

const write = (fileName, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return fail(err);
      success();
    });
  });
};

module.exports = {
  read,
  write,
};

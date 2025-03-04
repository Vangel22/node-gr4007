const fs = require("fs");

const read = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return reject(err);
      data = JSON.parse(data); // JSON vo JS objekt
      return resolve(data);
    });
  });
};

const write = async (fileName, data) => {
  data = JSON.stringify(data); // data da bide JSON objekt
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

const add = async (data) => {
  let file = await read("studenti.json");
  file.push(data);
  await write("studenti.json", file);
};

const remove = async (index) => {
  let file = await read("studenti.json");

  console.log("index type", typeof index);

  file = file.filter((_, i) => Number(index) !== i);

  await write("studenti.json", file);
};

const list = async () => {
  return await read("studenti.json");
};

const listTest = async () => {
  return await read("test.json");
};

module.exports = {
  read,
  write,
  add,
  remove,
  list,
  listTest,
};

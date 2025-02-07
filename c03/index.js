const fs = require("fs");
const { read, write } = require("./read-write");
// const obj = require("./test.js");
// obj.print()

// Callbacks - ES5 - Callback hell

function callMeBack(name, fun) {
  fun(name); // greetMe("Vangel")
}

function greetMe(name) {
  console.log("Hello", name);
}

// callMeBack("Vangel", greetMe);

// Promises - ES6 - Ke vratat nekakov status od koj: pending, rejected, fullfiled

// Step 1
// const writeFile = () => {};

// Step 2
// const writeFile = () => {
//   return new Promise();
// };

// Step 3
// const writeFile = () => {
//     return new Promise(() => {});
// };

// Step 4
// const writeFile = () => {
//     return new Promise((success, fail) => {});
// };
// const writeFile = () => {
//     return new Promise((resolve, reject) => {});
// };

// Step 5
const writeFile = () => {
  // success i fail se callback funkcii
  // success(value) i fail(reason)
  return new Promise((success, fail) => {
    fs.writeFile("data.txt", "Vangel", (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

// writeFile()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Sekogas se izvrsuvam posleden"));

// With callback
// const writeFileCallback = (callback) => {
//   fs.writeFile("data.txt", "Vangel", (err) => {
//     if (err) return callback(err);
//     return callback(null);
//   });
// };

// writeFileCallback((err) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("File written successfully");
//   }
// });

// Async/await - ES7 - syntactic sugar upon Promises
const delay = (ms) => {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject("Time must be a positive number!");
    } else {
      setTimeout(resolve, ms);
    }
  });
};

// async function greet() {}

const greet = async () => {
  try {
    // isto kako /then
    console.log("Hello...");
    await delay(2000); // 2 sekundi zadocnuvanje
    // za da vidime greska
    // await delay(-1);
    console.log("...World!");
  } catch (err) {
    // isto kako .catch
    console.error(err);
  } finally {
    // isto kako .finally
    console.log("Here finally!");
  }
};

// greet();

// fs t.e File System

// read()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// write()
//   .then((res) => console.log(res)) // res ke bide undefined, bidejki success() ja povikuvame na 120 linija bez argumenti
//   .catch((err) => console.log(err));

// (async () => {
//   try {
//     await write("studenti.txt", "Zdravo studenti od IIFE!");
//     const content = await read("studenti.txt");
//     console.log(content);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// async function runFileSystem() {
//   try {
//     await write("studenti.txt", "Zdravo studenti!");
//     const content = await read("studenti.txt");
//     console.log(content);
//   } catch (err) {
//     console.log(err);
//   }
// }

// runFileSystem();

// const myAsyncFun = async () => {
//   try {
//     await write("studenti.txt", "Zdravo studenti!");
//     const content = await read("studenti.txt");
//     console.log(content);
//   } catch (err) {
//     console.log(err);
//   }
// };

// myAsyncFun();

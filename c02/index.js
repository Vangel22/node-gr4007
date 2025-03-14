// require("")
// CommonJS -> Node -> synchronous -> module.exports so require("")
// ES modules -> async -> import/exports

const calculator = require("./calculator");

// Tri tipovi moduli: Local, Core, Third party
// const fs = require("fs"); // Core module
// const express = require("express"); // Third party module - se instaliraat so komandata npm install express

const obj = {
  name: "Semos",
  age: 40,
};

console.log(obj.name, obj.nesto, obj.age);
const { name, age, nesto } = obj; // object destructuring
console.log(name, age, nesto);
console.log(obj["name"], obj["age"]);
obj["nesto"] = "zdravo kako ste";
console.log(obj["nesto"]);

// Zadaca 1:
// 1. Dovrsete ja calculator funkcijata
// 2. Iskoritete ja vo index.js so site metodi (sobiranje, mnozenje, delenje, odzemanje)

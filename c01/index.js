// var, let, const
var myName = "Vangel"; // global scope

function test() {
  // functional scope
  if (true) {
    // block scope
    const myConstant = 1;
    let myLetVar = 2;
    var myVariable = 3;
  }
  //   console.log(myConstant);
  //   console.log(myLetVar);
  console.log(myVariable);
}

test();

// Primitive data types
// 1. Number
// 2. String
// 3. Boolean
// 4. Null - vrednost na objekt koj sto ne postoi
// 5. Undefined - neinicijalizirana varijabla
// 6. Symbol - unikatna i nepromenliva vrednost

// Non primitive data types
// 1. Object
// 2. Array
// 3. Function

// Function
// 1. Named - called sum
function sum(a, b) {
  return a + b;
}

// 2. Anonymous
const result = function (a, b) {
  return a + b;
};

// 3. Arrow function
const res = (a, b) => a + b;

// Recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1); // 5 * 4 * 3 * 2 * 1 = 120
  }
}

console.log(factorial(5)); // Output: 120

// IIFE - Immediatelly invoked function expression
// Step 1
// ()();

// Step 2
// (() => {})();
// (function () {})();

// Step 3
(() => {
  console.log("Hello World");
})();

// Callback - funkcija kako parametar
function performAction(callback) {
  // e ustvari greetMe funkcijata
  callback();
}

function greetMe() {
  console.log("Hello students!");
}

performAction(greetMe);

// Callback -> ES5
// Promises -> ES6
// Async/await -> ES7

// Uslovi
const tryOutOne = false;
const tryOutTwo = true;

// ! - negacija
// && - logicko i - dvete strani od sporedbata da bidat true
// || - logicko ili - barem eden izraz da e tocen
// ?? - ako leviot izraz e undefined ili null ke go prikaze desniot izraz
// true ? funOne() : funTwo(); -> funOne ke se izvrsi
// Isto kako:
// if (true) {
//   // funOne()
// } else {
//   // funTwo()
// }

if (!tryOutOne && tryOutTwo) {
  console.log("Vnatre");
}

// Manipulacii so nizi
const numbers = [1, 3, 2, 6, 5, 9, 12];

// filter
const biggerThanTwo = numbers.filter((num) => num > 2);
console.log("Bigger than two", biggerThanTwo);

// sort

// reduce

// find

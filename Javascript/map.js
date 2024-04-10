// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// console.log(fruits.get("apples"));

// const fruit = new Map();

// fruit.set("apples", 500);
// fruit.set("bananas", 300);
// fruit.set("oranges", 200);
// console.log(fruit.get("bananas"));

// console.log(fruit.size);

// console.log(fruits.delete("apples"));
// console.log(fruits.has("apples"));

// let text = "";
// fruits.forEach (function(value, key) {
//   text += key + ' = ' + value;
// })
// console.log(text);

// let text2 = "";
// for (const x of fruits.entries()) {
//   text2 += x + " ";
// }

// console.log(text2);

const companies = [
    ["Saab AB", "Stockholm", 1937],
    ["Volvo Group", "Goteborg", 1927],
    ["Sandvik AB", "Stockholm", 1862],
    ["Atlas Copco Group", "Nacka", 1873],
    ["Electrolux AB", "Stockholm", 1919],
    ["Skanska AB", "Stockholm", 1887],
];

let company = "";
companies.forEach( function (value, key) {
    company += key + " " + value + " " + "\n";
});
console.log(company);

const handleClick = () => {
    const targetElement = document.getElementById("btn");
    targetElement.innerHTML = company;
  }; 
const generateTable = () => {
    const tableDiv = document.getElementById("tableDiv");
    const table = document.createElement("table");
  
}
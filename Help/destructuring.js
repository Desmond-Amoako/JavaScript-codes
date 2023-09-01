// Array destructuring

// const numbers = [1, 2, 3];

// //  destructuring
// [num1, num2] = numbers;

// // printing elements  to console
// console.log(num1, num2);

// 20 ARRAY OF NAMES  NORMAL ARRAY

// const ARRAY_OF_NAMES = ['Max', 'Manuel', 'Anna', "John", "Jane", "Mary", "Mike", "Molly", "Mandy", "Mia", "Maggie", "Megan", "Morgan", "Moses", "Maurice", "Maurine", "Maurice", "Maurice", "Maurice", "Maurice"];

// //  destructuring

// const [name1, name2] = ARRAY_OF_NAMES;

// // printing elements  to console
// console.log(`Name 1: ${name1} Name 2: ${name2}`);

// 21 ARRAY OF NAMES  SPREAD OPERATOR

const ARRAY_OF_NAMES = [
  "Max",
  "Manuel",
  "Clifford",
  "John",
  "Jane",
  "Mary",
  "Mike",
  "Molly",
  "Mandy",
  "Mia",
  "Maggie",
  "Megan",
  "Morgan",
  "Moses",
  "Maurice",
  "Maurine",
  "Maurice",
  "Maurice",
  "Maurice",
  "Maurice",
];

// //  destructuring
const [name1, name2, ...otherNames] = ARRAY_OF_NAMES;

// // printing elements  to console
//  console.log(`Name 1: ${name1} Name 2: ${name2}`);

console.log(otherNames.toLocaleString());

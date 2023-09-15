
// WAP to copy value of one object to another. [6.7 Extending Objects - concise syntax]
let target = {x: 1}, source = {y: 2, z: 3};
Object.assign(target, source);
console.log(target);

// What is the output of the foll. program? [6.7 Extending Objects - Object.assign concept]
let target1 = {y: 7}, source1 = {y: 2, z: 3}, source2 = {y: 15, w: 23};
Object.assign(target1, source1, source2);
console.log("target1: ", target1);
console.log("source1: ", source1);
console.log("source2", source2);


let t1 = Symbol("sym_x");
console.log(t1);
let targetA = { t1: 45, z: 3 }, sourceA = { t1: 56 }
console.log(targetA);
Object.assign(targetA, sourceA);
console.log("targetA after assigning sourceA to it: ", targetA);
targetA.t1 = 57;
console.log("targetA after mutating it: ", targetA);

// Convert a string to an array
let str = "0123456789ABCDEF";
let digits = [...str];
console.log(digits);

// Remove Duplicate letters from an array
let letters = [..."hello world"];
let uniqueLetters = [...new Set(letters)];
console.log(uniqueLetters);

// What is the output of the foll. code:
let undefs = [,,]
console.log(undefs.length);

// What are the ways to create Arrays
// Explain Array Constructors
// What are the various factory methods to create an array
// How is Array.of() better than Array() constructor

// Ways to create a copy of an array
// 1. using spread operator
// 2. using Array.from(). How is this a bit different from 1. How are the useful when dealing withe the return values of web browsers

// Why passing a second argument to Array.from is more optimal than the array map() method. 

// Difference between a .forEach() method of a Set and that of an array?
// Why is the contract of .forEach() method of Map and that of an Array the same?










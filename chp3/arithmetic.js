console.log(NaN === NaN); // NaN is a value.
// NaN does not compare or equal to any other value. including itself.

const x = 0/0;
console.log(Number.isNaN(x));

const y = "my_str";
console.log(Number.isNaN(y)); // y can be converted to a number

let zero = 0;
let negz = -0;
console.log("Zero equals Negative zero: ", zero === negz); // This is peculiar
console.log("Infinity and -Infinity are not equal", 1/zero === 1/negz);
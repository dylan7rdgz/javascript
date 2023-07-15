// make conversions explicit to keep the code clearer




let n = 17;
let binary = "0b" + n.toString(2); console.log(binary); // type conversion is operator contextual; here the string is converted to a Number.
let octal = "0o" + n.toString(8); console.log(octal);
let hex = "0x" + n.toString(16); console.log(hex);
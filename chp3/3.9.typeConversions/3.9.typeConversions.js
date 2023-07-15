// its all about what javascript wants.

console.log(10 + "object") // by law js wants a string.
console.log("7" * "4") // by law js wants a no.
console.log(['a', 'b'].toString())

// flexible equality - all of the below equality results are true

console.log("null == undefined: ", null == undefined); // certain type conversions are done to determine the flexible equality output
console.log('"0" == 0', "0" == 0);
console.log("0 == false: ", 0 == false);
console.log('"0" == false: ', "0" == false);

// implicit convertibility of one type to another does not imply equality of those two values.
// for example, undefined implicitly gets converted to false; but the below equality is false 
console.log("undefined == false: ", undefined == false);

// IMP: JS operators and statements expect values of various types and performs conversions to those types.
// Striking Example: The if statement converts undefined to false, but the == operator never attempts to convert its operand to booleans.


console.log("BignInt can be compared to a Number: ", BigInt(8) > 7);


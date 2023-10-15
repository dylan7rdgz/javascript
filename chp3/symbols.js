let strname = "string name";
let symname = Symbol("propname"); // Symbol() is a function
typeof strname;
typeof symname;
let o = {};
o[strname] = 1;
o[symname] = 2;
o[strname]
o[symname]

// Benefit - preventing users from overwriting properties.

let s1 = Symbol("sym_x");
console.log("s: ", s1);
console.log("s: ", s1.toString());

let s2 = Symbol("sym_x");
console.log("s2 ", s2);
console.log("s: ", s2.toString());
console.log("Symbols are not the same: ", s1 === s2); // use case: a guarantee that your properties will never conflict with properties used by other code.

let t1 = Symbol.for("sym_x");
let t2 = Symbol.for("sym_x");
console.log("Symbols using 'Symbols.for()' are the same: ", t1 === t2); // when other code has rights to use or modify properties.

// Write functions to return a result a result based on the function parameters where ever possible

// How is a function invoked through an object?

const car = {
    brand: "Toyota",
    startEngine: function() {
      console.log(`${this.brand}'s engine started.`);
    }
};
  
car.startEngine(); // Invoked on the "car" object

const calculator = {
    add: function(a, b) {
      return a + b;
    }
};
  
const result = calculator.add(3, 5); // Invoked through the "calculator" object

// In Javascript functions are objects and they can be manipulated by programs.

// * FUNCTION DECLARATIONS
// Example of function declarations.
function add(a, b) {
    return a+b;
} 
// The name add is used as the name of a variable, and the newly defined function object is assigned to that variable
// add is hoisted to the top of the closest scope (block, enclosing function, enclosing script, CLASS?)
// they are defined before the JS interpreter begins to execute any of the code in that block

console.log(add);

/*
In ES6, we can define functions inside loops, conditionals or blocks
Restrictive programming - A function defined within a block only exists within that block, however, and it not visible outside the block
*/

//* FUNCTION EXPRESSIONS
/* Function expressions look like function declarations, but they appear within the context 
of larger expression (something that is evaluated to produce a value) or statement (to make something happen), and the name is optional*/
// UC1 The might make functions and code more SCALABLE

const square = function(x) { 
    return x*x;
}

const f = function fact(x) { 
    // The scope of this function will include a binding of the name fact to the function object
    // binding -> fact: func obj
    // so the function name becomes a local variable within the function
    if (x<=1) {
        return 1;
    }
    else {
        return x*fact(x-1);
    }
}
console.log(f(5))

// [3, 2, 1].sort(function(a, b) {return a-b;});

let tensquared = (
    function(x) {
        const a = 0; // NOTE: its own invocation context is defined (does this point to it??)
        return x*x;
    }(10)
);

// arrow functions are expressions and hence the name can be ignored

const a = 10;
let tensquaredd = (x => {
    return x*x // NOTE: 1. this refers to the global context. 2. Arrow functions do not have a prototype property and hence they cannot be used as constructor function for newly created classes
})(a);
console.log(tensquaredd);
'use strict'
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
    operand1: 1,
    operand2: 1,
    add() {
      this.result = this.operand1 + this.operand2;
    }
};
  
const result = calculator.add(); // Invoked through the "calculator" object

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
        const a = 0; 
        /*
         NOTE: its own invocation context is defined (does this point to it??)
         For function invocation in non-strict mode, the invocation context (the this value) is the global object.
         In strict mode, however, the invocation context is undefined.
        */
        return x*x;
    }(10)
);

// arrow functions are expressions and hence the name can be ignored

const a = 10;
let tensquaredd = (x => {
    /*
        NOTE: 1. this refers to the global context. 2. Arrow functions do not have a prototype property and hence they cannot be used as constructor function for newly created classes
        functions defined using arrow functions always "inherit"
        the this value that is in effect where they are defined
    */
    return x*x 
})(a);
console.log(tensquaredd);

//? Functions written to be invoked as functions (not as methods) do not typically use the this keyword at all
//? The keyword can however be used to determine whether we are in strict mode.
const strict = (function() {return !this;}());

const calculatorr = {
    operand1: 1,
    operand2: 1,
    add() {
      this.result = this.operand1 + this.operand2; //* METHOD INVOCATION is deiiferent from REGULAR FUNCTION INVOCATION IN ONE IMP WAY: this refers to the object in which the function is defined 
    }
};
  
const resultt = calculatorr.add(); 

let o = {
    m: function() { // method m of the object
        let self = this; // save the this value in a variable
        this === o // => true: this is the object o
        f(); // now call the helper nested function

        function f() {
            this === o // => this is global or undefined (this is a flaw in the JS language)
            self === o // => self is the outer this value. Capturing the this value in self is essential if we want to use it in the nested func. 
        }

    }
};
console.log(o.m)



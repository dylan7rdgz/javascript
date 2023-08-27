let scope = "global scope"; // A global variable

function checkscope() {
    let scope = "local scope"; // A local variable
    function f() { return scope; } // Return the value in scope here
    return f();
}

checkscope(); // => "local scope"


let scope2 = "global scope"; // A global variable
function checkscope() {
    let scope2 = "local scope"; // A local variable
    function f() { return scope2; } // Return the value in scope here
    return f;
}
let s = checkscope()(); // returns local scope

//! CO* Even though checkscope is invoked from the global scope,
//! it still remembers the values of the scope of the function scope it was defined in

//~ UC* 

// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;

// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
//& UC* - If a function needs be remember certain values across multiple invocations we can use property on the function object
//& [This is better than dirtying the global scope]
function uniqueInteger() {
    return uniqueInteger.counter++; // Return and increment counter property
}

uniqueInteger();
uniqueInteger(); 
console.log(uniqueInteger.counter); // prints 2
uniqueInteger.counter = 1; // buggy or malicious code
uniqueInteger(); 
console.log(uniqueInteger.counter); // again it prints 2 violating the function contract


// How closures mitigate this?

let uniqueIntegerClosure = (function() { // Define and invoke
    let counter = 0; // Private state of the function below
    return function() { return counter++; };
})(); 
// implemented a closure using an immediately invoked function expression to define a namespace 
// and a closure that uses the namespace to keep its state private

//! NOTE that the outer function get executed and returns just once
//! and so the binding to the "counter" variable happens just once
//! the inner function recognized the counter once and is the only place in the code 
//! that has exclusive access to it

uniqueIntegerClosure(); // => 0
uniqueIntegerClosure(); // => 1

// 

function counter() {
    let n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}

let c = counter(), d = counter(); // Create two counters

c.count(); // => 0
d.count(); // => 0: they count independently
c.reset(); // reset() and count() methods share state //! Here we explicitly/consciously reset "reset" the counter because a programmer obviously knows what reset means
c.count(); // => 0: because we reset c
d.count(); // => 1: d was not reset


//? IV* - What is the output of the foll. code?

// This function returns a function that always returns v
function constfunc(v) {
    return () => v;
}

// Create an array of constant functions:
let funcs = [];
for (var i = 0; i < 10; i++) {
    funcs[i] = constfunc(i);
}

// The function at array element 5 returns the value 5.
funcs[5](); // => 5

// Return an array of functions that return the values 0-9
function constfuncs2() {
    let funcs2 = [];
    for (var i = 0; i < 10; i++) {
        funcs2[i] = () => i;
    }
    return funcs2;
}

let funcs2 = constfuncs2();
console.log(funcs2[5]()); // => 10; Why doesn't this return 5?
console.log(funcs2[3]()); // => 10; Why doesn't this return 5?


// Return an array of functions that return the values 0-9
function constfuncs3() {
    let funcs3 = [];
    for (/*var*/let i = 0; i < 10; i++) {
        funcs3[i] = () => i;
    }
    return funcs3;
}

let funcs3 = constfuncs3();
console.log(funcs[5]()); // => 10; Why doesn't this return 5?
console.log(funcs[3]()); // => 10; Why doesn't this return 5?

//? IV* - Drawback of closures
//! CO*
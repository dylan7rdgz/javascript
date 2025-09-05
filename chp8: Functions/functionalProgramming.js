/*
 My style - Think of writing function definitions as helpers and within controllers/services; use RAD
          - Think of writing highly generic functions in functional sense 
 
 */

//! CO* - Higher Order Functions

function add(a, b) {
    const self = this; // Invoked on the global context 
    return a+b;
}

add(3, 5)

// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value;
function not(f) {
    return function(...args) { // Return a new function
        let result = f.apply(this, args); // that calls f 
        //! CO* - JS has the ability to invoke a function on Global Context -
        //! as though the function is getting executed referring global scope data.
        //! i.e the same scope in which even got executed referring global data
        return !result; // and negates its result.
    };
}

const even = x => x % 2 === 0; // A function to determine if a number is even
const odd = not(even); // A new function that does the opposite
[1, 1, 3, 5, 5].every(odd); // => true: every element of the array is odd


//! CO* - Partial Application of Functions


//? IV* - What is the output of the foll. code(s)?

// The arguments to this function are passed on the left
function partialLeft(f, ...outerArgs) {
    return function(...innerArgs) { // Return this function
        let args = [...outerArgs, ...innerArgs]; // Build the argument list
        return f.apply(this, args); // Then invoke f with it
    };
}

// The arguments to this function are passed on the right
function partialRight(f, ...outerArgs) {
    return function(...innerArgs) { // Return this function
        let args = [...innerArgs, ...outerArgs]; // Build the argument list
        return f.apply(this, args); // Then invoke f with it
    };
}

// The arguments to this function serve as a template. Undefined values
// in the argument list are filled in with values from the inner set.
function partial(f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...outerArgs]; // local copy of outer args template
        let innerIndex = 0; // which inner arg is next
        // Loop through the args, filling in undefined values from inner args
        for (let i = 0; i < args.length; i++) {
            if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
        }
        // Now append any remaining inner arguments
        args.push(...innerArgs.slice(innerIndex));
        return f.apply(this, args);
    };
}

// Here is a function with three arguments
const f = function(x, y, z) { return x * (y - z); };

// Notice how these three partial applications differ
partialLeft(f, 2)(3, 4); // => -2: Bind first argument: 2 * (3 - 4) i.e [2, 3, 4] is the argument list
partialRight(f, 2)(3, 4); // => 6: Bind last argument: 3 * (4 - 2) i.e [3, 4, 2] is the argument list
partial(f, undefined, 2)(3, 4); // => -6: Bind middle argument: 3 * (2 - 4) i.e [3, 2, 4] is the argument list


//~ UC* - to avoid re-writing similar functions having tweaks 

const sum = (x, y) => x + y;
const increment = partialLeft(sum, 1); //! CO* - INTERPRETATION - it's creating a new function with some of the arguments of the original function pre-filled. 
const cuberoot = partialRight(Math.pow, 1/3); // arguments placed to sum are applied the sum function used them. Now, if we add the second argument as 1 then 
cuberoot(increment(26)); // => 3

const not = partialLeft(compose, x => !x);
const even = x => x % 2 === 0;
const odd = not(even);
const isNumber = not(isNaN);
odd(3) && isNumber(2); // => true



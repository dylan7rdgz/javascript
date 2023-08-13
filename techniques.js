//* 1. Rest parameters and the
//* spread operator are often useful together, as in the following function,
//* which takes a function argument and returns an instrumented version
//* of the function for testing:

// This function takes a function and returns a wrapped version
function timed(f) {
    return function (...args) { //^ Collect args into a rest parameter array
        console.log(`Entering function ${f.name}`);
        let startTime = Date.now();
        try {
            // Pass all of our arguments to the wrapped function
            return f(...args); //? Spread the args back out again
        } finally {
            // Before we return the wrapped return value, print elapsed time.
            console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
        }
    };
}

// Compute the sum of the numbers between 1 and n by brute force
function benchmark(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Now invoke the timed version of that test function
timed(benchmark)(1000000); // => 500000500000; this is the sum of the numbers

// Replace the method named m of the object o with a version that logs messages "before and after" invoking the original method.
function trace(o, m) {
    let original = o[m]; // Remember original method in the closure.
    o[m] = function(...args) { // Now define the new method.
        console.log(new Date(), "Entering:", m); // Log message.
        let result = original.apply(this, args); // Invoke original.
        console.log(new Date(), "Exiting:", m); // Log message.
        return result; // Return result.
    };
}

// Define an object with a method
const myObject = {
    sayHello(name) {
        return `Hello, ${name}!`;
    }
};

// Apply the trace function to modify the object's method
trace(myObject, "sayHello");

// Call the modified method, which will log messages before and after invoking the original method
const result = myObject.sayHello("Alice");

// Output will show the entering and exiting messages along with the result
console.log("type of result: ", typeof result);




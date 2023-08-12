//! CO* - INTERVIEW Q: WHAT IS THE OUTPUT? They mix this with setTimeout, Promises, etc

(function() { // chunkNamespace() function rewritten as an unnamed expression.
    // Chunk of code goes here
})(); // End the function literal and invoke it now.


/*
This technique of defining and invoking a function in a single
expression is used frequently enough that it has become idiomatic and
has been given the name “immediately invoked function expression.”
Note the use of parentheses in the previous code example. The open
parenthesis before function is required because without it, the
JavaScript interpreter tries to parse the function keyword as a
function declaration statement. With the parenthesis, the interpreter
correctly recognizes this as a function definition expression. The
leading parenthesis also helps human readers recognize when a
function is being defined to be immediately invoked instead of defined
for later use.
*/
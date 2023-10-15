function f(y) {
     return this.x + y; 
} // This function needs to be bound
let o = { x: 1 }; // An object we'll bind to
let g = f.bind(o); // Calling g(x) invokes f() on o
g(2); // => 3   //! CO* - Also check the name property of object g -  i.e. 'bound f' - This helps in debugging effectively
let p = { x: 10, g }; // Invoke g() as a method of this object
p.g(2); // => 3: g is still bound to o, not p.



// ~ DP* - Functional Programming - Partial Application
//? IV* 
let sum = (x, y) => x + y; // Return the sum of 2 args
let succ = sum.bind(null, 1); // Bind the first argument to 1
succ(2); // => 3: x is bound to 1, and we pass 2 for the y argument

function f(y, z) { 
    return this.x + y + z; 
}
let gg = f.bind({ x: 1 }, 2); // Bind this and y
gg(3); // => 6: this.x is bound to 1, y is bound to 2, and z is 3

let o1 = Object.create({x: 1, y: 2}); // An object can be created using the first argument as the prototype of that object. 
console.log("o1 inherits properties x and y: ", o1.x + o1.y);

let o2 = Object.create(null); // Use null to create an object that does not have a prototype, but if you do this, the newly created object will not inherit anything, not even basic methods like toString() (which means it won't work with the + operator either)

// creates an ordinary empty object
let o3 = Object.create(Object.prototype);

let o4 = { x: "don't change this value"};
let o5 = Object.create(o4); // Guard against accidental modifications
library.function(o5);

// what is inversion of control?

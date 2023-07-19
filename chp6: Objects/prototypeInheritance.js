class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance() {
        return Math.sqrt(
            this.x * this.x + 
            this.y * this.y
        )
    }
}

let pt = new Point(1, 1); // everytime that your create an instance of a class with new, you are creating an object that inherits properties from a prototype object.
console.log("distanceFromOrigin: ", pt.distance()); // distance is a property present in the prototype object: distance is the property k and the anonymous function would become the value

// NOTE: Remember, almost all objects have a prototype but most do not have a property named prototype. Javascript works even if you can't access the prototype object directly

// DEMO* - querying for values
let o = {}; // o only inherits <Object> as prototype
o.x = 1;
let p = Object.create(o); // p inherits <o> as prototype which inherits <Object> as prototype 
p.y = 2;
let q = Object.create(p);
q.z = 3; // observe the linked list pattern
let f = q.toString();
console.log("--->", q.x + q.y); // try to query x and the value will be searched in the prototypical chain upward until the value is found UNTIL an object with null prototype is searched 



// DEMO* - assigning to a property

/**********************/
q.y = 2;
console.log("a new property y is created in q: ", q);
console.log("property y in p is untouched (prototypes of an object remain unaffected): ", p);


/**********************/

/*
 UC* - The fact that inheritance occurs when querying properties 
 but not when setting them is key feature of Javascript because it allows
 us to selectively override inherited properties


*/

/*
 NOTE* - there is one exception to the RULE* that a property assignment either fails or creates or sets a property in the original object
 If o inherits the property x, and that property is an accessor property with a setter method,
 then that setter method is called rather than creating a new property x in o

 Note, however, that the setter is called on the object o, not on the prototype object that defines the property,
 so if the setter object defines properties it will do so on o, and it will again leave the prototype chain unmodified  
*/


// DEMO* - deleting a property

let a = {}; // o only inherits <Object> as prototype
a.x = 2;
let b = Object.create(a); // p inherits <o> as prototype which inherits <Object> as prototype 
b.x = 1;
let c = Object.create(b); // p inherits <o> as prototype which inherits <Object> as prototype 
c.x = 2;

delete c.x; // if we delete property x from c, then the property x in a is retained
delete c.x; // if x is not in c the interpreter will not search for another value x up the prototypical chain
delete a.x;






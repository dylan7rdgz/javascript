/* Terminology
data properties have a value  [considering these value as a (property?) attribute]
accessor properties have a getter and/or setter method [considering these getter and setter methods as property attributes]

property descriptor object [JS methods use this object called the property descriptor for querying and setting attributes of an object]
property descriptor object of a data property has properties named 
    1. value, 2.writable, 3.enumerable, 4.configurable
property descriptor object of an accessor property has property named
    1. get (type: f), 2.set (type: f), 3.enumerable (type: bool), 4.configurable (type: bool)

*/

const obj1 = {
    x: 1
}

const propDescriptor1 = Object.getOwnPropertyDescriptor(obj1, "x");
console.log(propDescriptor1);

// Here is an object with a read-only property accessor
const random = {
    get octet() {
        return Math.floor(Math.random()*256)
    }
}

const propDescriptor2 = Object.getOwnPropertyDescriptor(random, "octet");
console.log(propDescriptor2);


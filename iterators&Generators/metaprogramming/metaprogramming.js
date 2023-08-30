/* Terminology
data properties have a value  [considering these value as an (property?) attribute]
accessor properties have a getter and/or setter method [considering these getter and setter methods as property attributes]

property descriptor [JS methods use this object called the property descriptor for querying and setting attributes of an object]
property descriptor object of a data property has properties named 
    1. value, 2.writable, 3.enumerable, 4.configurable
property descriptor object of an accessor property has property named
    1. get (type: f), 2.set (type: f), 3.enumerable (type: bool), 4.configurable (type: bool)

*/

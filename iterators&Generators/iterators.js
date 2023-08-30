/**
 Iterable object: An object with a special (Iterator method)
                  returns an (Iterator object)

 Iterator (object?): An object with a next() method
           that returns an (Iteration result object)

 Iteration result object: An object with properties named 1. value and 2. done
**/

let iterable = [99];
let iterator = iterable[Symbol.iterator]();

for(let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value);
}

//~ Find UC of partially used iterators

//^ EX*

class Range {
    constructor(from, to) {
      this.from = from;
      this.to = to;
    }
  
    // make a range act like a Set of numbers
    has(x) {
      return typeof x === "number" && this.from <= x && x <= this.to;
    }
 
    // Return string representation of the range using set notation
    toString() {
      return `{ x | ${this.from} ≤ x ≤ ${this.to} }`;
    }

    // Make a Range iterable by returning an iterator object
    // Note that the name of this method is a special symbol, not a string
    [Symbol.iterator]() {
      let next = Math.ceil(this.from);
      let last = this.to;
  
      return {
        next() {
          return next <= last
            ? { value: next++ }
            : { done: true };
        },
        //! CO* - As a convenience we make the iterator itself iterable.
        [Symbol.iterator()]() { return this; }
      };
    }
}
  
// Example usage
for (let x of new Range(1, 10)) {
    console.log(x); // Logs numbers 1 to 10
}
  
console.log([...new Range(-2, 2)]); // Logs: [-2, -1, 0, 1, 2]


function map(iterable, f) {
    let iterator = iterable[Symbol.iterator](); // iteratorObj for the Range iterable
  
    const iterableObj = {
      [Symbol.iterator]() {
        return this; // this references the json object in which it is defined

        //! CO* - Returning "this" seems to have the same behavior as returning next enclosed in an object
        // return {next() {
        //     let v = iterator.next();
        //     if (v.done) {
        //       return v;
        //     } else {
        //       return { value: f(v.value) };
        //     }
        // }}


      },
      next() { 
        let v = iterator.next();
        if (v.done) {
          return v;
        } else {
          return { value: f(v.value) };
        }
      }
    };

    return iterableObj;
}
  
// Example usage
const squaredRange = map(new Range(1, 4), x => x * x); // squaredRange is an iterable value

console.log("typeof squaredRange: ", typeof squaredRange);


let iterator2 = squaredRange[Symbol.iterator](); // iteratorObj for the squaredRange iterable
for(let result = iterator2.next(); !result.done; result = iterator2.next()) {
    console.log(result.value);
}
// const result = [...squaredRange]; // Creates an array of squared
  

function filter(iterable, predicate) {
    let iterator = iterable[Symbol.iterator]();
  
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        for (;;) {
          let v = iterator.next();
          if (v.done || predicate(v.value)) {
            return v;
          }
        }
      }
    };
}
  
// Example usage
const filteredRange = filter(new Range(1, 10), x => x % 2 === 0);
const result2 = [...filteredRange]; // Creates an array of even numbers from the range

console.log(result2); // Logs: [2, 4, 6, 8, 10]
  

// ~UC* - imp - lazily iterate the words of a string without keeping all of them in memory at once 
// ~UC* - imp - compare this with s.split("")
function words(s) {
    var r = /\s+|$/g; // Match one or more spaces or end
    r.lastIndex = s.match(/[^ ]/).index; // Start matching at first non-space
  
    return {
      [Symbol.iterator]() { // This makes us iterable
        return this;
      },
      next() { // This makes us an iterator
        let start = r.lastIndex;
  
        let match = r.exec(s); // match the next word boundary
        if (match) { // if we found one return the word
          return { value: s.substring(start, match.index) };
        }
  
        return { done: true }; // Otherwise, say that we're done
      }
    };
  }
  
// Example usage
const wordIterable = words(" abc def ghi! ");
const result = [...wordIterable]; // Creates an array of words

console.log(result); // Logs: ["abc", "def", "ghi!"]




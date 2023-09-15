
let m = new Map([["x", 1], ["y", 2]]);

// spread operators on Maps
[...m]

// Like sets, insertion order in Map is always maintained. 

const arr = [...m.keys()]
const arr2 = [...m.values()]
const arr3 = [...m.entries()] // same as [...m]

//! CO* - Idiomatic approach of iterating a map Destructuring + for of
for (let [key, value] of m) {

}
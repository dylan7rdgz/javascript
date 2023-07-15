// primitive values are obviously immutable

let s = "hello";
s.toLocaleUpperCase(); // returns a new string; s is not altered
console.log(s); // s is still "hello"

// objects are mutable
// objects are never equal even if the values they contain are similar

function equalArrays(a, b) { // we need to use this algorithm to check equality of different references with same contained values
    if (a === b) return true;
    if (a.length!=b.length) return false;
    for (let i=0; i<a.length; i++) {
        if (a[i] != b[i]) return false;
    }
    return true;
}

// objects are also known as reference types



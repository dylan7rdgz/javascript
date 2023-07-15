// 1. While loop - Trivial
// 2. Do while loop - Use case
function printArray(a) {
    let len = a.length, i = 0;
    if (len === 0) {
        console.log("Empty Array");
    } else {
        do {
            console.log(a[i]);
        } while (++i < len); // do while loop always needs to be terminated with a semicolon.
    }
}
// 3. for statement - Special use case - traverse a linked list and return the last element

function tail(o) { // return the tail of the linked list o
    for(; o.next; o=o.next) /* empty */;
    return o;
}

console.log("4. for/of loops: ");
console.log("on iterables like arrays: ")
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0; // This is a comma separated compound expression.
for (let element of data) { // data is an expression that evaluates to an iterable.
    console.log("element: ", element);
    sum+=element;
    // data.push(sum); // Arrays are iterated live - changes made during the iteration may affect the outcome of the iteration.
    // for example, pushing a value into the array will manipulate the array and this loop will never terminate.
}
console.log("on objects: "); 
/*
 note: 
    1. that objects are not iterable by default.
    2. iteration of the keys of an object is not live as the array example above.
*/
let o = { x: 1, y: 2, z: 3 };
let keys = "";
for (let k of Object.keys(o)) { 
    /* note:
        1. Object.values(o) will return an array of values in the object.
        2. Object.entries(o) return both keys and values; use along with Destructuring.
    */
    keys+=k;
}
console.log("Keys of the object concatenated as a string: ", keys);
console.log("for/of on strings: ")

// IV* - unique characters
let frequency = {};
for (let letter of "mississippi") {
    if (frequency[letter]) {
        frequency[letter++];
    } else {
        frequency[letter] = 1;
    }
}
console.log("frequency: ", frequency);

console.log("I \ud83d\udc99 \u{01F408}");

const str = "I \ud83d\udc99 \u{01F408}"

console.log("Strings are iterated by Unicode point, not by UTF-16 character: ")
for (let letter of str) {
    console.log(letter);
}


console.log("for/of on Sets: ");
let text = "Na na na na na na na na Batman";
let wordSet = new Set(text.split(" "));
let unique = [];
for (let word of wordSet) {
    unique.push(word)
}
console.log("Unique words: ", unique);

console.log("for/of on Maps: ");

let m = new Map([[1, "one"]]);
for (let [key, value] of m) {
    console.log(key);
    console.log(value);
}

// async iteration with for/await - variant of for/of loop and works with asynchronous iterators

// Read chunks from an asynchronously iterable stream and print them out 
async function printStream(stream) {
    for await (let chunk of stream) {
        console.log(chunk);
    }
}

// for/in - works with objects after the in operator

/*
note - the for/in does not enumerate properties whose names are symbols
*/



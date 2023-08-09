
// Use case: serial number generator
// This object generates strictly increasing serial numbers
const serialnum = {
    // This data holds the next serial number.
    // The _ in the property name hints that it is for internal use only
    _n: 0,
    // Return the current value and increment it
    get next() { return this._n++; },

    // set a new value of n, but only if it is larger than current
    set next(n) {
        if (n > this._n) {
            this._n = n;
        }
        else {
            throw new Error("serial number can only be set to a larger value")
        }
    },
}

serialnum.next = 10; // set the starting serial no.
console.log(serialnum.next); // 10
console.log(serialnum.next); // 11: different value each time we get next

// Use case: Encapsulation
// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluated.

const random = {
    get octet() { return Math.floor(Math.random()*256);},
    get unit16() { return Math.floor(Math.random()*65536);},
    get int16() { return Math.floor(Math.random()*65536) - 32768;},
}
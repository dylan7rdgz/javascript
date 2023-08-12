//^ Ex*:

function vectorAdd(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
}
vectorAdd([1, 2], [3, 4]); // => [4, 6]

// Destructuring Arrays:
// Unpacking intelligence
function vectorAdd([x1, y1], [x2, y2]) { // Unpack 2 arguments into 4 parameters
    return [x1 + x2, y1 + y2];
}
vectorAdd([1, 2], [3, 4]); // => [4, 6]

// Destructuring Objects:
// Multiply the vector {x, y} by a scalar value
function vectorMultiply({ x, y }, scalar) {
    return { x: x * scalar, y: y * scalar };
}
vectorMultiply({ x: 1, y: 2 }, 2); // => { x: 2, y: 4 }


// You can define parameter defaults with destructured parameters.
// Here’s vector multiplication that works with 2D or 3D vectors:
function vectorMultiply({ x, y, z = 0 }, scalar) {
    return { x: x * scalar, y: y * scalar, z: z * scalar };
}
vectorMultiply({ x: 1, y: 2 }, 2); // => { x: 2, y: 4, z: 0 }


//^ EX*
function f([x, y, ...coords], ...rest) {
    return [x + y, ...rest, ...coords]; // Note: spread operator here
}
f([1, 2, 3, 4], 5, 6); // => [3, 5, 6, 3, 4]

//& UC*:
function arraycopy({ from, to = from, n = from.length, fromIndex = 0, toIndex = 0 }) {
    let valuesToCopy = from.slice(fromIndex, fromIndex + n);
    to.splice(toIndex, 0, ...valuesToCopy);
    return to;
}
let a = [1, 2, 3, 4, 5], b = [9, 8, 7, 6, 5];
arraycopy({ from: a, n: 3, to: b, toIndex: 4 }); // => [9, 8, 7, 6, 1, 2, 3, 4, 5]



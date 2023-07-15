
let points = [ // two points
    { x:0, y:0 },
    { x:1, y:1 },
]

points.dist = function() {
    console.log(this);
    let p1 = this[0]; // the this keyword refers to the object on which the method is defined.
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a*a + b*b);
}

points.dist();
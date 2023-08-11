
// 1. single-responsibility principle - A class should have one and only one reason to change, meaning that that a class shoud have only one Job.


class Square {
    length;
    constructor(length) {
        this.length = length;
    }
}

class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
}

class AreaCalculator {

    shapes // ensure that this is a protected property
    areas = []
    constructor(shapes) {
        this.shapes = shapes
    }

    sum() {
     this.shapes.array.forEach(shape => {
        if (shape instanceof Square) {
            areas.push(Math.pow(shape.length, 2));
        } else if (shape instanceof Circle) {
            const PIE = 3.14;
            areas.push(PIE * Math.pow(shape.radius, 2));
        } 
     });   

     const totalSum = areas.reduce((acc, val) => acc + value, 0);
     return totalSum;

    }

    output() {
        return `Sum of the areas of provided shapes: ${this.sum()}`;
    }

}

const shapes = [ new Circle(2), new Square(5), new Square(6)];

const areas = new AreaCalculator(shapes);

console.log(areas.output());

// What if I want the output to be in JSON format?
// All of the logic would be handled by the AreaCalculator class. This would violate the single-responsibility principle. The AreaCalculator class should only be concerned with the sum of the areas of provided shapes. It should not care whether the user wants JSON or HTML.

class SumCalculatorOutputter {

    calculator; // NOTE: this should be a protected value
    data = [];

    constructor(AreaCalculator calculator) { // This can be handled in TS but how to handle this in JS?
        this.calculator = calculator;
    }

    json_encode() {

    }
    JSON() {
        this.data.push(this.calculator.sum);
        return this.json_encode(data);
    }

    html_encode() {

    }
    HTML () {
        this.data.push(this.calculator.sum);
        return this.html_encode();
    }
}

shapes = [new Circle(2), new Square(5), new Square(6)];

areas = new AreaCalculator(shapes);
output = new SumCalculatorOutputter(areas);

console.log(output.JSON());
console.log(output.HTML());

// Now, the logic you need to output the data to the user is handled by the SumCalculatorOutputter class. That satisfies the single-responsibility principle.
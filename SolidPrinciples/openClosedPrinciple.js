// Objects or entities should be open for extension but closed for modification.


class Square {
    length;
    constructor(length) {
        this.length = length;
    }
    
    area() {
        return Math.pow(this.length, 2);
    }

}

class Circle {
    radius;
    
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        const PIE = 3.14;
        return PIE*Math.pow(this.radius, 2);
    }
}

class AreaCalculator {
    areas;
    shapes;

    sum() {
        this.shapes.forEach(shape => {
           this.areas.push(shape.area()); 
        });
        const totalSum = areas.reduce((acc, val) => acc + value, 0);
        return totalSum;
    }
}

// If a new class is created the AreaCalulator class code does not break

// However, another problem arises. 
// How do you know that the object passed into the AreaCalculator is actually a shape or if the shape has a method named area?
// Coding to an interface is an integral part of SOLID.

interface ShapeInterface { // This can be achieved in typescript. How can this be done in JS?
    public function area();
}

class Square implements ShapeInterface {

}

class Circle implements ShapeInterface {
    
}

class AreaCalculator {
    areas;
    shapes;

    sum() {
        this.shapes.forEach(shape => {
            if (shape instanceof ShapeInterface) {
                this.areas.push(shape.area()); 
            } else {
                throw Error('AreaCalculatorInvalidShapeException');
            }
        });
        const totalSum = areas.reduce((acc, val) => acc + value, 0);
        return totalSum;
    }
}
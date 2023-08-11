/*
Liskov Substitution Principle states:

    Let q(x) be a property provable about objects of x of type T. 
    Then q(y) should be provable for objects y of type S where S is a subtype of T.

    This means that every subclass or derived class should be substitutable for their base or parent class.

*/



class VolumeCalculator extends AreaCalculator {
    constructor(shapes) {
        super(shapes);
    }

    sum() {
        // logic to calculate the volumes and then return an array of output
        return [summedData]; // Returning the sum within an array
    }

}


class SumCalculatorOutputter {
    constructor(calculator) {
        this.calculator = calculator;
    }

    JSON() {
        const data = {
            sum: this.calculator.sum()
        };

        return JSON.stringify(data);
    }

    HTML() {
        return `
            <div>
                Sum of the areas of provided shapes: ${this.calculator.sum()}
            </div>
        `;
    }

}

const areas = new AreaCalculator(shapes);
const volumes = new VolumeCalculator(shapes);

const output1 = new SumCalculatorOutputter(areas);

const output2 = new SumCalculatorOutputter(volumes);

// When you call the HTML method on the "output2" object, you will get an E_NOTICE error informing you of an array to string conversion.

// To Satisfy the Liskov substitution principle sum method of VolumeCalculator should return summedData directly and not within an array.
// so that this.calculator.sum() remains the same irrespective of the base class or subclass





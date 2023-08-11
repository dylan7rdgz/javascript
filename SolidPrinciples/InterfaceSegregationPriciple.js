/*
Interface segregation principle states:

    A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.

*/

interface ShapeInterface {
    area();
    volume(); // Forcing Square class to implement a method it has no use of
}

interface ShapeInterface {
    area();
}

interface ThreeDimensionalShapeInterface {
    volume();
}

class Cuboid implements ShapeInterface, ThreeDimensionalShapeInterface {
    area() {
        // Calculate the surface area of the cuboid
    }

    volume() {
        // Calculate the volume of the cuboid
    }
}

/****************************************************************************/
interface ManageShapeInterface {
    calculate();
}

class Square implements ShapeInterface, ManageShapeInterface {
    area() {
        // Calculate the area of the square
    }

    calculate() {
        return this.area();
    }
}

class Cuboid implements ShapeInterface, ThreeDimensionalShapeInterface, ManageShapeInterface {
    area() {
        // Calculate the surface area of the cuboid
    }

    volume() {
        // Calculate the volume of the cuboid
    }

    calculate() {
        return this.area();
    }
}






// Inheritance
class Vehicle {
    constructor(make, model, year, color) {
        this.make = make
        this.model = model
        this.year = year
        this.color = color
    }

    drive() {
        console.log("Driving {this.make} {this.model}");
    }
}

class Car extends Vehicle {
    constructor(numSeats) {
        this.numSeats = numSeats
    }
}

class RideShareCar extends Car {
    constructor(isAvailable) {
        this.isAvailable = isAvailable
    }
}


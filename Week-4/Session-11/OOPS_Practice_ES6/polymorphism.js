// Inheritance
class Shape {
    calculateArea() {

    }
}

class Rectangle extends Shape {
    calculateArea(width, height) {
        return width * height
    }
}

class Triangle extends Shape {
    calculateArea(base, height) {
        return (base * height) / 2
    }
}

class Circle extends Shape {
    calculateArea(radius) {
        return Math.PI * radius * radius
    }
}

const rectangle = new Rectangle()
const triangle = new Triangle()
const circle = new Circle()

console.log("Area of Rectangle", rectangle.calculateArea(20, 50));
console.log("Area of Triangle", triangle.calculateArea(30, 30));
console.log("Area of Circle", circle.calculateArea(15));
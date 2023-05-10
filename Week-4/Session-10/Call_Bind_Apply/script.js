class Calculator {    
    add (num1, num2) {
        return num1 + num2
    }
    subtract (num1, num2) {
        return num1 - num2
    }
    multiply (num1, num2) {
        return num1 * num2
    }
    divide (num1, num2) {
        return num1 / num2
    }
}

class ScientificCalculator extends Calculator {
    square (num) {
        return Math.sqrt(num)
    }
    cube (num) {
        return Math.cbrt(num)
    }
    power (num1, num2) {
        return Math.pow(num1, num2) 
    }
}

const obj = new ScientificCalculator();

console.log("Addition: 2 + 3 = ",  obj.add.call(obj, 2, 3));
console.log("Subtraction: 10 - 5 = ", obj.subtract.apply(obj, [10, 5]));

const multiplyByTwo = obj.multiply.bind(obj, 2);
const powerOfThree = obj.power.bind(obj, 3);

console.log("Multiply By 2: ", multiplyByTwo(2));
console.log("x Power Of 3: ", powerOfThree(3));
function counter() {
    let count = 0
    
    function incrementClosure() {
        return ++count
    }

    return incrementClosure
}
  
const firstCounter = counter()
const secondCounter = counter()

var firstValues = new Array()

firstValues.push(firstCounter())
firstValues.push(firstCounter())
firstValues.push(firstCounter())
firstValues.push(firstCounter())
firstValues.push(firstCounter())

var secondValues = new Array()

secondValues.push(secondCounter())
secondValues.push(secondCounter())
secondValues.push(secondCounter())

console.log("firstValues array: ", firstValues)
console.log("secondValues array: ", secondValues)
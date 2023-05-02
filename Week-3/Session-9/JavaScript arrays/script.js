// Put your solution here
let evenNums = []
let oddNums = []

function divideArray(nums) {
    // Sorting an Array
    nums.sort()

    // Finding Even and Odd Numbers
    nums.forEach(element => {
        if (element % 2 == 0) {
            evenNums.push(element)
        } else {
            oddNums.push(element)
        }
    });

    // Checking any empty array or not
    console.log("Even numbers: \n", evenNums.length != 0 ? evenNums : "None")
    console.log("Odd numbers: \n", oddNums.length != 0 ? oddNums : "None")
}


// Test Case 1 :
let nums_1 = [4, 2, 9, 1, 8]; 
divideArray(nums_1); 

// Test Case 2 :
// let nums_2 = [4, 2, 8]; 
// divideArray(nums_2); 
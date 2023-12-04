function doubleArrayWithCallback(arr, callback) {
    // Create an empty array to store the doubled values
    const doubledArray = [];

    // Iterate through the input array and apply the callback to double each element
    for (let i = 0; i < arr.length; i++) {
        const doubledValue = callback(arr[i]);
        doubledArray.push(doubledValue);
    }

    // Return the new array with doubled values
    return doubledArray;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];

// Define a callback function to double a number
function doubleNumber(num) {
    return num * 2;
}

const doubleResult = doubleArrayWithCallback(inputArray, doubleNumber);
console.log(doubleResult);
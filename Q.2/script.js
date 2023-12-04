function manipulateString(inputString, callback) {
    // Convert the input string to uppercase
    const manipulatedString = inputString.toUpperCase();
  
    // Define the logString callback function
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
  
    // Call the provided callback function
    callback(logString);
  }
  
  // Example usage:
  manipulateString("hello, world!", function(logStringCallback) {
    logStringCallback();
  });
function ageInDays(person, logResult) {
    // Extract first name, last name, and age from the person object
    const { firstName, lastName, ageInYears } = person;
  
    // Calculate age in days (assuming an average of 365 days per year)
    const ageInDays = Math.floor(ageInYears * 365);
  
    // Concatenate the first name and last name into a full name
    const fullName = `${firstName} ${lastName}`;
  
    // Define the callback function to log the result
    function logAgeInDays() {
      console.log(`The person's full name is ${fullName}, and their age in days is ${ageInDays}.`);
    }
  
    // Call the provided callback function
    logResult(logAgeInDays);
  }
  
  // Example usage:
  const person = {
    firstName: "Mithun",
    lastName: "S",
    ageInYears: 20
  };
  
  function logResult(callback) {
    callback();
  }
  
  ageInDays(person, logResult);
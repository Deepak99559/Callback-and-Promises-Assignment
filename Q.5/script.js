function greetWithName(name) {
    return new Promise((resolve, reject) => {
        if (typeof name === "string") {
            const greeting = `Hello, ${name}!`;
            resolve(greeting);
        } else {
            reject(new Error("Name should be a string."));
        }
    });
}

// Example usage:
const name = "Mithun";

greetWithName(name)
    .then(greeting => {
        console.log(greeting);
})
.catch(error => {
    console.error(error.message);
});
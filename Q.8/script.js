// Define the API endpoints URL
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Use the fetch method to make a GET request to the API
fetch(apiUrl)
.then((response) => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    // Parse the JSON response
    return response.json();
})
.then((data) => {
    // LOg the data to the console
    console.log(data);
})
.catch((error) => {
    // Handle Aany errors that occur during the fetch and log them
    console.error("Fetch error:", error);
});
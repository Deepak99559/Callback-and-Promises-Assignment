function fetchDatafromAPI() {
    // URL of the API
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/1"

    // Use the fetch function to make the API request
    fetch(apiUrl)
    .then(response => {
        // Check if the response status is OK {HTTP status code 200}
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response body as JSON
        return response.json();
    })
    .then(data => {
        // Log the data to the console
        console.log("Data from API:", data);
    })
    .catch(error => {
        // Handle any error that occurred during the fetch
        console.error("Error:", error);
    });
}

fetchDatafromAPI();
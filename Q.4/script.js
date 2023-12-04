// Function to process a lsit of books and a callback function
function processBooks(books, callback) {
    // Extract titles using the map function
    const titles = books.map(book => book.title);

    // Sort titles alphabetically
    titles.sort();

    // Call the callback function with the sorted titles
    callback(titles);
}

// Callback function to log titles to the console
function logTitles(titles) {
    titles.forEach(title => console.log(title));
}

// List of books as object {title, author, year}
const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

processBooks(books, logTitles)
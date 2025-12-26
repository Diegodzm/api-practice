// Function to handle the fetch request
async function fetchData() {
    const outputElement = document.getElementById('output');
    outputElement.textContent = 'Status: Fetching...';

    try {
        // Replace with the actual API endpoint you want to use
        const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

        // Perform the fetch request
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Display the data in the output area
        outputElement.textContent = '';

        // Iterate through the object and append clean text
        for (const key in data) {
            // This creates a format like "title: delectus aut autem"
            outputElement.textContent += `${key}: ${data[key]}\n`;
        }
        console.log('Fetched data:', data);

    } catch (error) {
        // Handle any errors that occurred during the fetch operation
        outputElement.textContent = `Status: Error - ${error.message}`;
        console.error('Fetch error:', error);
    }
}

// Get the button element
const fetchButton = document.getElementById('fetchButton');

// Add an event listener to the button
fetchButton.addEventListener('click', fetchData);
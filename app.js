// Function to handle the fetch request
async function fetchData() {
    const outputElement = document.getElementById('output');
    outputElement.textContent = 'Status: Fetching...';

    try {
       
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

       
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }


        const data = await response.json();

 
        outputElement.textContent = '';

        for (const key in data) {
            // This creates a format like "title: delectus aut autem"
            outputElement.textContent += `${key}: ${data[key]}\n`;
        }
        console.log('Fetched data:', data);

    } catch (error) {
     
        outputElement.textContent = `Status: Error - ${error.message}`;
        console.error('Fetch error:', error);
    }
}


const fetchButton = document.getElementById('fetchButton');


fetchButton.addEventListener('click', fetchData);

async function postData() {
    const outputElement = document.getElementById('output');
    outputElement.textContent = 'Status: Posting...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        outputElement.textContent = '';

        for (const key in data) {
            outputElement.textContent += `${key}: ${data[key]}\n`;
        }
        console.log('Posted data:', data);

    } catch (error) {
        outputElement.textContent = `Status: Error - ${error.message}`;
        console.error('Post error:', error);
    }
}

// Get the post button element
const postButton = document.getElementById('postButton');

// Add an event listener to the post button
postButton.addEventListener('click', postData);

async function putData() {
    const outputElement = document.getElementById('output');
    outputElement.textContent = 'Status: Putting...';
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id:1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        outputElement.textContent = '';

        for (const key in data) {
            outputElement.textContent += `${key}: ${data[key]}\n`;
        }
        console.log('Put data:', data);

    } catch (error) {
        outputElement.textContent = `Status: Error - ${error.message}`;
        console.error('Put error:', error);
    }
}

// Get the post button element
const putButton = document.getElementById('putButton');

// Add an event listener to the put button
putButton.addEventListener('click', putData);

async function deleteData() {
    const outputElement = document.getElementById('output');
    outputElement.textContent = 'Status: Deleting...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // For DELETE, response might be empty, so check if there's data
        const data = await response.json().catch(() => ({})); // Handle empty response

        outputElement.textContent = '';

        if (Object.keys(data).length === 0) {
            outputElement.textContent = 'Status: Deleted successfully (no content returned)';
        } else {
            for (const key in data) {
                outputElement.textContent += `${key}: ${data[key]}\n`;
            }
        }
        console.log('Delete response:', data);

    } catch (error) {
        outputElement.textContent = `Status: Error - ${error.message}`;
        console.error('Delete error:', error);
    }
}

// Get the delete button element
const deleteButton = document.getElementById('deleteButton');

// Add an event listener to the delete button
deleteButton.addEventListener('click', deleteData);

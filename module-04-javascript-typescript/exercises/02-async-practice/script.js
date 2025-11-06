// Async/Await Practice
// Using JSONPlaceholder API (free fake API for testing)

const usersList = document.getElementById('users-list');
const fetchUsersBtn = document.getElementById('fetch-users');
const fetchPostsBtn = document.getElementById('fetch-posts');
const clearBtn = document.getElementById('clear');

// TODO: Function to fetch users from API
async function fetchUsers() {
    // Show loading message
    usersList.innerHTML = '<div class="loading">Loading users...</div>';

    try {
        // TODO: Fetch data from https://jsonplaceholder.typicode.com/users
        // Hint: const response = await fetch(url);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // TODO: Convert response to JSON
        // Hint: const data = await response.json();
        const data = await response.json();

        // TODO: Display users
        // 
        displayUsers(data);
        //usersList.innerHTML = '<div class="error">Not implemented yet - check script.js!</div>';

    } catch (error) {
        // Handle errors
        usersList.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        console.error('Error fetching users:', error);
    }
}

// TODO: Function to fetch posts
async function fetchPosts() {
    usersList.innerHTML = '<div class="loading">Loading posts...</div>';

    try {
        // TODO: Fetch from https://jsonplaceholder.typicode.com/posts
        // Get only first 10 posts
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        // TODO: Convert response to JSON
        // Hint: const data = await response.json();
        const data = await response.json();

        // TODO: Display users
        // 
        displayPosts(data);
        // TODO: Convert to JSON

        // TODO: Display posts
        // Call displayPosts(data);

        //usersList.innerHTML = '<div class="error">Not implemented yet - check script.js!</div>';

    } catch (error) {
        usersList.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        console.error('Error fetching posts:', error);
    }
}

// Function to display users
function displayUsers(users) {
    usersList.innerHTML = '';

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        `;
        usersList.appendChild(card);
    });
}

// Function to display posts
function displayPosts(posts) {
    usersList.innerHTML = '';

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        usersList.appendChild(card);
    });
}

// Function to clear display
function clear() {
    usersList.innerHTML = '';
}

// Event listeners
fetchUsersBtn.addEventListener('click', fetchUsers);
fetchPostsBtn.addEventListener('click', fetchPosts);
clearBtn.addEventListener('click', clear);

// BONUS CHALLENGE: Create a function that fetches both users and posts
// in parallel using Promise.all()
async function fetchBoth() {
    // TODO: Use Promise.all to fetch both at once
    // const [users, posts] = await Promise.all([
    //     fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
    //     fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
    // ]);
}

/*
SOLUTION:

async function fetchUsers() {
    usersList.innerHTML = '<div class="loading">Loading users...</div>';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        displayUsers(data);
    } catch (error) {
        usersList.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        console.error('Error fetching users:', error);
    }
}

async function fetchPosts() {
    usersList.innerHTML = '<div class="loading">Loading posts...</div>';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const allPosts = await response.json();
        const first10 = allPosts.slice(0, 10);
        displayPosts(first10);
    } catch (error) {
        usersList.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        console.error('Error fetching posts:', error);
    }
}
*/

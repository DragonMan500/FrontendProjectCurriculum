// Shopping List Manager Exercise
// Practice: Arrays, Objects, Array Methods

// TODO: Create an array to store shopping items
// Each item should be an object with: id, name, quantity, purchased
let shoppingList = [];

// TODO: Create a counter for unique IDs
let nextId = 1;

// Get DOM elements
const itemNameInput = document.getElementById('item-name');
const itemQuantityInput = document.getElementById('item-quantity');
const addBtn = document.getElementById('add-btn');
const itemList = document.getElementById('item-list');
const showAllBtn = document.getElementById('show-all');
const showPurchasedBtn = document.getElementById('show-purchased');
const showUnpurchasedBtn = document.getElementById('show-unpurchased');

// Current filter
let currentFilter = 'all';

// TODO: Function to add an item
function addItem(name, quantity) {
    // Create an object with:
    // - id: use nextId, then increment it
    // - name: the item name
    // - quantity: the quantity
    // - purchased: false (new items aren't purchased yet)
    let item = {
        id: nextId,
        name: name,
        quantity: quantity,
        purchased: false,
    }

    nextId++;

    // Add the object to the shoppingList array
    shoppingList.push(item)
        
    // Render the list
    renderList();
    // Clear the inputs
    itemNameInput.value = '';
    itemQuantityInput.value = '1';
}

// TODO: Function to toggle purchased status
function togglePurchased(id) {
    let item = shoppingList.find((item) => (item.id == id))
    // Find the item in the array with matching id
    // Hint: Use array.find() method
    console.log(item)
    // Toggle its purchased property (true ↔ false)
    item.purchased = !item.purchased
    // Render the list
    renderList();

}

// TODO: Function to delete an item
function deleteItem(id) {
    shoppingList = shoppingList.filter((item) => (item.id != id))
    // Remove the item from the array
    // Hint: Use array.filter() to keep all items except the one with this id

    // Render the list
    renderList();
}

// TODO: Function to render the shopping list
function renderList() {
    // Clear the current list
    itemList.innerHTML = '';

    // Filter items based on currentFilter
    let filteredItems = shoppingList;

    if (currentFilter === 'purchased') {
        filteredItems = shoppingList.filter ((item) => (item.purchased === true))
        // TODO: Filter to show only purchased items
        // Hint: Use array.filter() where item.purchased === true
    } else if (currentFilter === 'unpurchased') {
        filteredItems = shoppingList.filter ((item) => (item.purchased === false))
        // TODO: Filter to show only unpurchased items
        // Hint: Use array.filter() where item.purchased === false
    }

    // Loop through filtered items and create DOM elements
    filteredItems.forEach(function(item) {
        // Create list item
        const li = document.createElement('li');
        li.className = 'item';
        if (item.purchased) {
            li.classList.add('purchased');
        }

        // Create item info div
        const itemInfo = document.createElement('div');
        itemInfo.className = 'item-info';
        itemInfo.textContent = `${item.name} (x${item.quantity})`;

        // Create actions div
        const itemActions = document.createElement('div');
        itemActions.className = 'item-actions';

        // Create toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = item.purchased ? 'Unpurchase' : 'Purchase';
        toggleBtn.onclick = function() {
            togglePurchased(item.id);
        };

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            deleteItem(item.id);
        };

        // Append everything
        itemActions.appendChild(toggleBtn);
        itemActions.appendChild(deleteBtn);
        li.appendChild(itemInfo);
        li.appendChild(itemActions);
        itemList.appendChild(li);
    });

    // Show message if list is empty
    if (filteredItems.length === 0) {
        const message = document.createElement('li');
        message.textContent = 'No items to display';
        message.style.textAlign = 'center';
        message.style.color = '#999';
        itemList.appendChild(message);
    }
}

// Event listener for add button
addBtn.addEventListener('click', function() {
    const name = itemNameInput.value.trim();
    const quantity = parseInt(itemQuantityInput.value);

    if (name === '') {
        alert('Please enter an item name');
        return;
    }

    if (quantity < 1) {
        alert('Quantity must be at least 1');
        return;
    }

    addItem(name, quantity);
});

// Event listener for Enter key in name input
itemNameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});

// Event listeners for filter buttons
showAllBtn.addEventListener('click', function() {
    currentFilter = 'all';
    renderList();
});

showPurchasedBtn.addEventListener('click', function() {
    currentFilter = 'purchased';
    renderList();
});

showUnpurchasedBtn.addEventListener('click', function() {
    currentFilter = 'unpurchased';
    renderList();
});

// Initial render
renderList();


addItem('Milk', 2);
addItem('Bread', 1);
addItem('Eggs', 12);


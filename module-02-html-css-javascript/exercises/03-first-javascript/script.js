// Button Click Counter Exercise
// Your goal: Make the counter increase each time the button is clicked!

// TODO: Create a variable to store the click count (start at 0)
let count = 2
let counterdisplay = document.getElementById('count-display')
// TODO: Select the button element using its ID
document.getElementById('click-button').addEventListener('click', function() {
    count*=count;
    counterdisplay.textContent = `Clicks: ${count}`
})
// Hint: Use document.getElementById('click-button')


// TODO: Select the display element where the count will be shown
// Hint: Use document.getElementById('count-display')


// TODO: Add an event listener to the button that listens for 'click' events
// Hint: button.addEventListener('click', function() { ... })


    // TODO: Inside the click handler function:

    // TODO: Increase the click count by 1


    // TODO: Update the text content of the display element
    // Hint: display.textContent = 'Clicks: ' + clickCount;
    // Or use template literals: display.textContent = `Clicks: ${clickCount}`;




// BONUS: Try console.log() to see if your code is running!
// console.log('Script loaded!');

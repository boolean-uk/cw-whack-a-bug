// Pull all of the needed HTML elements into our script so we can manipulate them
const scoreDisplay = document.getElementById('score-display')
const timerDisplay = document.getElementById('timer-display')
const cells = document.querySelectorAll('.cell')
const gameOverElement = document.querySelector('.game-over')

// Define some game state
let score = 50
let timeLeft = 3
let bugSpeed = 800
let gameOver = false

// Display the initial game state in the elements on screen
scoreDisplay.innerText = score
timerDisplay.innerText = timeLeft

// Create a function to remove all bugs from the game board
function removeBug() {
    // Iterate over every cell on the grid
    for (let i = 0; i < cells.length; i++) {
        // Remove the bug class from the CSS list on the element
        const bugCell = cells[i]
        bugCell.classList.remove('bug')
    }
}

// Create a function to add a bug to a random cell on the grid
function randomBug() {
    // First, remove any existing bugs
    removeBug()
  
    // Generate a random number between 0 and however many cells there are
    const randomNumber = Math.floor(Math.random() * cells.length)
  
    // If the player has a score more than 10, start speeding the bug up
    if (score > 10) {
        bugSpeed *= 0.8
    }
  
    // Add the bug CSS class to the cell to display the bug
    const cell = cells[randomNumber]
    cell.classList.add('bug')
}
  
  // Create an interval that runs the randomBug function every bugSpeed miliseconds
const bugMovement = setInterval(randomBug, bugSpeed)
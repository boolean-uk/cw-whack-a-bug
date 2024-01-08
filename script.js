// Pull all of the needed HTML elements into our script so we can manipulate them
const scoreDisplay = document.getElementById('score-display')
const timerDisplay = document.getElementById('timer-display')
const cells = document.querySelectorAll('.cell')
const gameOverElement = document.querySelector('.game-over')

// Define some game state
let score = 0
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

removeBug()
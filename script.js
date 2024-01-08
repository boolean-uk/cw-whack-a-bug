// Pull all of the needed HTML elements into our script so we can manipulate them
const scoreDisplay = document.getElementById('score-display')
const timerDisplay = document.getElementById('timer-display')
const cells = document.querySelectorAll('.cell')
const gameOverElement = document.querySelector('.game-over')

// Define some game state
let score = 0
let timeLeft = 30
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

// Create a function to make the timer count down
function countDown() {
    // Reduce the timeLeft variable by 1 then change the timer text on screen to reflect it
    timerDisplay.innerText = --timeLeft
  
    // Check if the timer has finished
    if (timeLeft === 0) {
        // If it has, clear the intervals to stop the bug moving 
        clearInterval(timer)
        clearInterval(bugMovement)
        // Set gameOver to true so we can't click any more bugs
        gameOver = true
        // Display the game over text
        gameOverElement.innerText = `GAME OVER! Score: ${score}`
    }
}
  
// Create an interval that will run the countDown function every 1 second
const timer = setInterval(countDown, 1000)

// Iterate over every cell so we can add a click event listener to each cell
for (let i = 0; i < cells.length; i++) {
    const cell = cells[i]
  
    // add an event listener to the cell
    cell.addEventListener('click', function () {
        // Check if the cell has the bug CSS class and the game has not finished
        if (cell.classList.contains('bug') && !gameOver) {
            // Increase the score by 1 and then replace the score on screen
            scoreDisplay.innerText = ++score

            // Remove the bug from the cell
            cell.classList.remove('bug')
            // Add the splat graphic to the cell
            cell.classList.add('splat')

            // Set a timeout that will run a function to remove the splat graphic from the cell after 200 miliseconds
            setTimeout(function () {
                cell.classList.remove('splat')
            }, 200)
        }
    });
}
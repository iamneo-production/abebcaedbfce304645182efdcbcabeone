// Initial game state
let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive=true;
//let result = document.querySelector('.result');
//let btns = document.querySelectorAll('.btn');
function playerTurn(cell){
    if(gameState[cell]=== "" && gameActive)
    {
        gameState[cell]=currentPlayer;
        document.getElementById('btn${cell}').value=currentPlayer;
        document.getElementById('btn${cell}').disabled=true;
        checkResult();
        currentPlayer=currentPlayer==="X"? "0":"X";
    }
}
function checkResult(){
    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i=0;i<winningCombinations.length;i++)
    {
        const [a,b,c]=winningCombinations[i];
        if(gameState[a] && gameState[a]===gameState[b] && gameState[a]=== gameState[c])
        {
            alert('player ${currentPlayer} Wins!');
            gameActive=false;
            return;
        }
    }
}

function resetGame()
{
    currentPlayer="X";
    gameActive=true;
    gameState=['', '', '', '', '', '', '', '', ''];
    for(let i=1;i<=9;i++)
    {
        document.getElementById('btn${i}').value="";
        document.getElementById('btn${i}').disabled=false;
    }
}
// // Function to handle player moves
// const ticTacToe = (element, index) => {
//     // Your game logic here

//     /*
//     **Part 1: Winning Conditions (Add your code here)**

//     1. Implement the logic to check for winning conditions using the 'conditions' array.
//     2. Display a winning message in the 'result' element when a player wins.
//     3. Disable all buttons after a win.
//     */

//     // Your code to update the game state and check for a win
//     // ...

//     // Your code to display the current player's turn
//     // ...

//     // Your code to handle button and cell interactions
//     // ...
// };

//     /*
//     **Part 2: Reset Function (Add your code here)**

//     1. Implement a new function that resets the game to its initial state.
//     2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
//     3. Update the 'result' element to indicate the current player's turn.
//     4. Re-enable all buttons for a new game.
//     */

// // Function to reset the game
// const resetGame = () => {
//     // Your code to reset the game state
//     // ...

//     // Your code to update the 'result' element
//     // ...

//     // Your code to re-enable buttons
//     // ...
// };

// btns.forEach((btn, i) => {
//     btn.addEventListener('click', () => ticTacToe(btn, i));
// });

// document.querySelector('#reset').addEventListener('click', resetGame);

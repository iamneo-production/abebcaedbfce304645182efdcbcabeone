let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let result = document.querySelector('#result');
let btns = document.querySelectorAll('.btn');

function playerTurn(index) {
    if (gameState[index] === '' && gameActive) {
        gameState[index] = currentPlayer;
        btns[index].value = currentPlayer;
        btns[index].disabled = true;
        checkResult();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        result.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkResult() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            result.textContent = `Player ${currentPlayer} Wins!`;
            gameActive = false;
            return;
        }
    }
    if (!gameState.includes('') && gameActive) {
        result.textContent = "It's a Draw!";
        gameActive = false;
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    btns.forEach((btn) => {
        btn.value = '';
        btn.disabled = false;
    });
    result.textContent = `Player ${currentPlayer}'s Turn`;
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => playerTurn(i));
});

document.querySelector('#reset-btn').addEventListener('click', resetGame);

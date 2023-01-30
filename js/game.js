let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['O', 'X']
let gameOver = false;

let placarPlayer0 = 0
let placarPlayer1 = 0

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position) {
    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime]

        gameOver = isWin()

        if (gameOver == false) {
            if (playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    }
    return gameOver;
}

function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false
    resetSquare()
}

function isWin() {

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos0 = seq[0]
        let pos1 = seq[1]
        let pos2 = seq[2]

        if (board[pos0] == board[pos1] && board[pos0] == board[pos2] && board[pos0] != '') {

            if (playerTime == 0) {
                placarPlayer0++
                placar1(placarPlayer0);
                reset()

            } else {
                placarPlayer1++
                placar2(placarPlayer1);
                reset()
            }

            //return true;
        }
    }
    return false;
}

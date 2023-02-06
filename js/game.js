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

let tie = new Audio("../audios/tie.mp3")
let victory = new Audio("../audios/victory.mp3")

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
    //playerTime = 0;
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
                victory.play();
                reset()

            } else {
                placarPlayer1++
                placar2(placarPlayer1);
                victory.play();
                reset()
            }

            return false;
        }
    }

    let isEmpate = true;
    for (let i = 0; i < board.length; i++) {
        if (board[i] == '') {
            isEmpate = false;
            break;
        }
    }

    if (isEmpate) {
        // Aqui você pode adicionar a lógica para lidar com um empate
        var body = document.querySelector("body")
        body.style.backgroundColor = getRandomColor();
        tie.play()
        reset()

    }

    return false;
}
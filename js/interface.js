
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        document.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    square = event.target;
    position = square.id;
    if (handleMove(position)) {

    }
    updateSquare();
}

function updateSquare() {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {

        let position = square.id;
        let symbol = board[position]

        if (symbol != '') {
            square.innerText = symbol
        }
    })
}

function resetSquare() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {

        square.innerText = ''

    })
}

function placar1(placarPlayer0) {
    let x = document.getElementById('result-1')
    x.innerText = placarPlayer0
    x.style.animation = " result1 2s ease"
}
function placar2(placarPlayer1) {
    let x = document.getElementById('result-2')
    x.innerText = placarPlayer1
    x.style.animation = " result1 2s ease"
}

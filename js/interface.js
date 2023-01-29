
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

function resetSquare(){
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {

        square.innerText = ''
           
    })
}

function placar1(placarPlayer0) {
    document.getElementById('result-1').innerText = placarPlayer0
}
function placar2(placarPlayer1) {
    document.getElementById('result-2').innerText = placarPlayer1
}

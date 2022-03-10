// board é um array em q vai armazenar a posiçao(id) dos quadrados q foram criados
// playerTime é uma variavel q vai armazenar(0 ou 1) que vai servir pra dividir o jogador da vez
// symbols são os simbolos ultilizados

// var de config
let board = ['', '', '', '', '', '', '', '', '',''];
let playerTime = 0;
let symbols = ['O', 'X'];
let gameOver = false;
let winstates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach((squares) => {
        squares.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let squares = event.target;
    let position = squares.id;

    handleMove(position)
    updateSquares(position)
    
}

function handleMove(position) {

    if(gameOver){
        return;
    }

    if (board[position] == '') {

        board[position] = symbols[playerTime]
        gameOver = iswin()
        
             board[position] = symbols[playerTime]

            if (playerTime == 0) {
                playerTime = 1;
                document.getElementById("jogador2").style.border="none"
                document.getElementById("jogador1").style.border="2px solid white"
            } else {
                playerTime = 0;
                document.getElementById("jogador1").style.border="none"
                document.getElementById("jogador2").style.border="2px solid white"
            }
    }
}

function updateSquares(id) {
    document.getElementById(id).innerHTML = board[id];
}

function iswin() {

    for (let i = 0; i < winstates.length; i++) {
        let seq = winstates[i]

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos3] == board[pos1] && board[pos1] !== '') {          
              var msg =  document.getElementById('alerta')
              msg.style.color="green"
              msg.innerText="Temos um vencedor! Jogador "+ symbols[playerTime]
              document.getElementById('retomar').style.display="block"
            return true;
        }else if(board[0] && board[1] && board[2] && board[3] && board[4] && board[5] && board[6] && board[7] && board[8] !==''){
            var msg =  document.getElementById('alerta')
            msg.innerText="Empate!"
        }
    }
}
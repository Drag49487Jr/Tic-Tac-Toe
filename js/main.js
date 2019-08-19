/*------constants------*/
const PLAYERS = {
    '1': 'X',
    '-1':'O',
    'null':'',
};
const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
const msgEl = document.getElementById('msg');
const sqEl = document.querySelectorAll('div');
/*----- event listeners -----*/ 
document.querySelector('.board').addEventListener('click', handleClick );
document.getElementById('restart').addEventListener('click', reset);
/*----- functions -----*/
init();

function init(){
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = null;
    render();
}
function handleClick(evt){
    let idx = parseInt(evt.target.id.replace('sq',' '));
    if (board[idx] || winner) return;
    winner = getWinner();
    board[idx] = turn;
    turn *= -1;
    console.log(idx);
    render(); 
}
function render(){
    board.forEach(function(sq, idx){
        sqEl[idx].textContent = PLAYERS[sq];
    });
    if (!winner) {
            msgEl.innerHTML = `${PLAYERS[turn]} Turn!`;
        } else if(winner === 't') {
            msgEl.innerHTML = 'There is a tie!';
    } else {
        msgEl.innerHTML = `${PLAYERS[winner]} Wins!`
    }
}
function getWinner(){
for (let i = 0; i < combos.length; i++) {
    if (Math.abs(board[combos[i][0]] + board[combos[i][1]] 
        + board[combos[i][2]]) === 3) return board[combos[i][0]];
};
if (board.includes(0)) return 0;
return 't';
}

function reset(){
    init();
}
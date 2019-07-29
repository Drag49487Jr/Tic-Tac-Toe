/*------constants------*/
const COLORS = {
    '0': 'white',
    '1':'red',
    '-1':'blue'
};
/*----- app's state (variables) -----*/ 
/*----- cached element references -----*/
/*----- event listeners -----*/ 
/*----- functions -----*/
init();

function init(){
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    turn = 1;
    winner = null;
}

var btn = document.querySelector('#btnCls')
var board = document.querySelector('#main')
var grid = [[document.querySelector('#grid11'),document.querySelector('#grid12'),document.querySelector('#grid13')],
            [document.querySelector('#grid21'),document.querySelector('#grid22'),document.querySelector('#grid23')],
            [document.querySelector('#grid31'),document.querySelector('#grid32'),document.querySelector('#grid33')]
        ]

var turn = 'X';
var game = false

function turnGiver() {
    if (turn=='X'){
        changeTurn('O')
        return 'X'
    } else if (turn=='O') {
        changeTurn('X')
        return 'O'  
    }
}

function changeTurn(color) {
    turn = color;
    document.querySelector('#currentTurn').innerText = "Currnet turn: "+color;
}

function clearTable(e) {
    for (i in grid){
        for (j in grid[i]){
            grid[i][j].innerText = '';
        }
    }
    changeTurn('X');
    newgame();
}

function tic(e) {
    if (canITic(e.explicitOriginalTarget.innerText)) {
        tic = e.explicitOriginalTarget;
        tic.innerText = turnGiver();
        if (isThisWin()) {
            gameover();
            turnGiver();
            document.querySelector('#currentTurn').innerText = turn+" has won the game!";
        }
        console.log(game);
    }
}

function isThisWin(){
    if ((grid[0][0].innerText==grid[0][1].innerText && grid[0][1].innerText==grid[0][2].innerText && grid[0][0].innerText!='') ||
    (grid[1][0].innerText==grid[1][1].innerText && grid[1][1].innerText==grid[1][2].innerText && grid[1][0].innerText!='') ||
    (grid[2][0].innerText==grid[2][1].innerText && grid[2][1].innerText==grid[2][2].innerText && grid[2][0].innerText!='') ||
    
    (grid[0][0].innerText==grid[1][0].innerText && grid[1][0].innerText==grid[2][0].innerText && grid[0][0].innerText!='') ||
    (grid[0][1].innerText==grid[1][1].innerText && grid[1][1].innerText==grid[2][1].innerText && grid[0][1].innerText!='') ||
    (grid[0][2].innerText==grid[1][2].innerText && grid[1][2].innerText==grid[2][2].innerText && grid[0][2].innerText!='') ||
    
    (grid[0][0].innerText==grid[1][1].innerText && grid[1][1].innerText==grid[2][2].innerText && grid[0][0].innerText!='') ||
    (grid[2][0].innerText==grid[1][1].innerText && grid[1][1].innerText==grid[0][2].innerText && grid[2][0].innerText!='') ){
        return true;
    } else {
//        console.log('1: '+grid[0][0].innerText + grid[0][1].innerText + grid[0][2].innerText);
//        console.log('2: '+grid[1][0].innerText + grid[1][1].innerText + grid[1][2].innerText);
//        console.log('3: '+grid[2][0].innerText + grid[2][1].innerText + grid[2][2].innerText);
        return false;
    }
}

function gameover() {
    game = false;
}

function newgame() {
    game = true;
}


function canITic(tic){
    if (tic != '' || !game) {
        return false;
    } else {
        return true;
    }
}

btn.addEventListener('click',clearTable);
board.addEventListener('click',tic)
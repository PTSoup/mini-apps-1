console.log(`reading app.js`)

const square = document.querySelector('table');
const refresher = document.getElementById('refresh');


//game elements
var moveCount = 0;
var X = [];
var O = [];
var gameEnd = false;

var current = 'X';

var winningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];


//handles game functions
var arraySorter = function(array) {
    array.sort(function(a,b) {
        return a - b;
    })
};


var winCheck = function(player) {
    return winningCombos.reduce(function(base, combo) {
        if(player.join('').toString().includes(combo.join('').toString()) === true) {
            base = true;
        }
        return base;
    }, false);
};

//handles when a cell is clicked
var cellClickHandler = function(event) {
    if (event.type === 'click') {
        if (gameEnd === true || moveCount === 9) {
            alert('Game has ended!');
            return;
        } else {
            var cell = event.target.id;
            document.getElementById(cell).innerHTML=current;
            moveCount++;
            if (current === 'X') {
                X.push(Number(cell));
                arraySorter(X);
                current = 'O';
            } else if (current === 'O') {
                O.push(Number(cell));
                arraySorter(O);
                current = 'X';
            }
            if(moveCount >= 5) {
                if(winCheck(X) === true) {
                    // alert(`X wins!`);
                    document.getElementById('message').innerHTML='X wins!';
                    gameEnd = true;
                    return;
                } else if (winCheck(O) === true) {
                    document.getElementById('message').innerHTML='O wins!';
                    gameEnd = true;
                    return;
                } else if (moveCount === 9) {
                    document.getElementById('message').innerHTML=`Both y'all losers!`;
                }   
            }    
        }
    }
};

//handles when refresher is clicked
var clickRefresh = function(event) {
    
    if (event.type === 'click') {
        moveCount = 0;
        X = [];
        O = [];
        gameEnd = false;
        current = 'X';
        document.getElementById('message').innerHTML='';
        const gameboard = document.getElementsByClassName('cell');
        for (var i = 0; i<gameboard.length; i++) {
            gameboard[i].innerHTML = "";
        }
    }
}

square.addEventListener('click', cellClickHandler);
refresher.addEventListener('click', clickRefresh);

console.log(`reading app.js`)

const square = document.querySelector('table');

//game elements
var moveCount = 0;
var player1 = [];
var player2 = [];

var current = 'X';
var lastMove = null;

//handles when a cell is clicked
function clickHandler(event) {
    if (event.type === 'click') {
        console.log('The cell was clicked!');
        console.log(event.target.id);
        document.getElementById(event.target.id).innerHTML=current;
        moveCount++;
        current = (current === 'X') ? 'O' : 'X';
    }
};



// for (var i = 0; i < square.length; i ++) {
//     var cellNumber = square[i].id;
//     square[i].addEventListener('click', eventHandler);
// }  


square.addEventListener('click', clickHandler);
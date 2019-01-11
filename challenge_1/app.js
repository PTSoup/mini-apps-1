console.log(`reading app.js`)

const square = document.querySelector('table');

function eventHandler(event) {
    if (event.type === 'click') {
        console.log('The cell was clicked!');
        console.log(event.target.id);
    }

};


// for (var i = 0; i < square.length; i ++) {
//     var cellNumber = square[i].id;
//     square[i].addEventListener('click', eventHandler);
// }  


square.addEventListener('click', eventHandler);
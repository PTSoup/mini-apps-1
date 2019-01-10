console.log(`reading app.js`)

const square = document.getElementsByClassName('cell');

function eventHandler(event) {
    if (event.type === 'click') {
        console.log('The cell was clicked!');
    }
};

window.addEventListener('click', eventHandler);
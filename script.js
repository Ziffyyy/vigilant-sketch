const gridContainer = document.querySelector('.grid-container');
const generatorButton = document.querySelector('.grid-button');
const eraserButton = document.querySelector('.eraser-button');
let gridItem;
let eraserToggle = false;

function makeGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = 'grid-item';
    }
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(item => {
        item.addEventListener('click', () => item.classList.add('toggled'));
    })
    
}

generatorButton.addEventListener('click', () => {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer. firstChild)
    }
    let x;
    let z;

    function gridSize() {
        x = +prompt('Pick a number between 0 and 100');
        z = x;
        if (x > 100 || x < 0 || isNaN(x)) {
            alert('Please input a valid number');
            gridSize();
            return;
        } else {
            return [x, z]
        }
    }
    gridSize()
    makeGrid(x, z);
})

eraserButton.addEventListener('click', () => {
    if (!eraserToggle) {
        gridItem = document.querySelectorAll('.grid-item');
        gridItem.forEach(item => {
            item.addEventListener('click', () => item.classList.remove('toggled'));
            item.removeEventListener('click', () => item.classList.add('toggled'));
        })
        eraserToggle = true;
    } else {
        gridItem = document.querySelectorAll('.grid-item');
        gridItem.forEach(item => {
            item.removeEventListener('click', () => item.classList.remove('toggled'));
            item.addEventListener('click', () => item.classList.add('toggled'));
        })
        eraserToggle = false;
    }

})

makeGrid(16, 16);
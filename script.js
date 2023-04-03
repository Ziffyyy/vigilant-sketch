const gridContainer = document.querySelector('.grid-container');
const generatorButton = document.querySelector('.grid-button');
let gridItem;

function makeGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = 'grid-item';
    }
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(item => {
        item.addEventListener('mouseover', () => item.classList.add('toggled'));
    })
    
}

generatorButton.addEventListener('click', () => {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer. firstChild)
    }

    let x = prompt('How many rows and columns do you want?');
    makeGrid(x, x);
})

makeGrid(16, 16);
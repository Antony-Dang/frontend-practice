let grid = document.createElement('div');
grid.classList.add('grid');
let body = document.querySelector('body');
let dimensionsButton = document.querySelector('.dimensions');
let resetButton = document.querySelector('.reset');

function createGrid(dimensions = 16) {
    size = 100 / dimensions;

    for (let i = 0; i < dimensions; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.height = `${size}%`;

        for (let j = 0; j < dimensions; j++) {
            let col = document.createElement('div');
            col.classList.add('col');

            col.style.width = `${size}%`;
            col.style.height = `${size}%`;
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
    body.appendChild(grid);
    addHoveringColor();
}

function addHoveringColor() {
    let squares = document.querySelectorAll('.col');
    squares.forEach(square => {
        square.addEventListener('mouseover', function(e) {
            square.classList.add('hover');
        })
    });
}


dimensionsButton.addEventListener('click', function(e) {
    let dimensions = parseInt(prompt('Please input desired square grid size'));
    if (!dimensions || dimensions <= 0 || dimensions > 100) {
        alert('Dimension must between 0 and 100');
        return
    }
    let child = grid.lastElementChild; 
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
    createGrid(dimensions);
})

resetButton.addEventListener('click', function(e) {
    let squares = document.querySelectorAll('.col');
    squares.forEach(square => {
        square.classList.remove('hover');
    });
})


createGrid();
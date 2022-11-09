function createGrid() {
    let grid = document.createElement('div')
    grid.classList.add('grid');
    for (let i = 0; i < 16; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }

    let body = document.querySelector('body');
    body.appendChild(grid);
}

createGrid();
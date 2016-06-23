function createMaze(n, m) {

    // Establish variables and starting grid
    var totalCells = n * m;
    var cells = [];
    var unvis = [];
    for (var i = 0; i < m; i++) {
        cells[i] = [];
        unvis[i] = [];
        for (var j = 0; j < n; j++) {
            cells[i][j] = [0, 0, 0, 0];
            unvis[i][j] = true;
        }
    }

    // Set a random position to start from
    var currentCell = [Math.floor(Math.random() * m), Math.floor(Math.random() * n)];
    var path = [currentCell];
    unvis[currentCell[0]][currentCell[1]] = false;
    var visited = 1;

    // Loop through all available cell positions
    while (visited < totalCells) {
        // Determine neighboring cells
        var pot = [[currentCell[0]-1, currentCell[1], 0, 2],
                [currentCell[0], currentCell[1]+1, 1, 3],
                [currentCell[0]+1, currentCell[1], 2, 0],
                [currentCell[0], currentCell[1]-1, 3, 1]];
        var neighbors = [];

        // Determine if each neighboring cell is in game grid, and whether it has already been checked
        for (var l = 0; l < 4; l++) {
            if (pot[l][0] > -1 && pot[l][0] < m && pot[l][1] > -1 && pot[l][1] < n && unvis[pot[l][0]][pot[l][1]]) {
                neighbors.push(pot[l]);
            }
        }

        // If at least one active neighboring cell has been found
        if (neighbors.length) {
            // Choose one of the neighbors at random
            next = neighbors[Math.floor(Math.random() * neighbors.length)];

            // Remove the wall between the current cell and the chosen neighboring cell
            cells[currentCell[0]][currentCell[1]][next[2]] = 1;
            cells[next[0]][next[1]][next[3]] = 1;

            // Mark the neighbor as visited, and set it as the current cell
            unvis[next[0]][next[1]] = false;
            visited++;
            currentCell = [next[0], next[1]];
            path.push(currentCell);
        }
        // Otherwise go back up a step and keep going
        else {
            currentCell = path.pop();
        }
    }

    return cells.map(function(row) {
        return row.map(function(cell) {
            return {
                top: !cell[0],
                right: !cell[1],
                bottom: !cell[2],
                left: !cell[3]
            };
        });
    });
}

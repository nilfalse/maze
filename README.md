Maze Generator
==============

A script in JavaScript to create a randomly generated maze.

To use, include the mazegenrator.js file, then call the `createMaze(y, x)` function with the input parameters for the size of the maze, as x and y variables. Return value is an array defining the new maze.

An example.html file is included to show a possible usage.

The generated maze is defined by a multidimensional array consisting of `y` and `x` coordinates, followed by definitions for the walls of each selected cell. The walls are defined by plain objects with corresponding `top`, `right`, `bottom` and `left` keys, which define the presence of a wall by boolean value.

Note that `y` coordinates are used first in the array, and `x` is second. This is to facilitate the display of the maze in HTML, as horizontal rows need to be established first, followed by each vertical cell in the row.

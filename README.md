# Minesweeper

### A full-stack implementation of Minesweeper.

- Use React for all the components
- Use Redux to store gameplay state

Default board size is 10x10 with 10 hidden mines randomly on the board.

#### Gameplay Rules

On each turn, the user clicks on a square to uncover it. If the square:

- Contains a mine, the user loses, and the game is over!
- Is adjacent to a mine, the square displays the total number of mines in the 8 squares around it.
- Is not adjacent to a mine, the square is blank and should behave as if the 8 adjacent squares were also clicked. For each of those squares, their neighboring squares continue to be revealed in each direction (i.e., this step is applied recursively to all neighboring squares) until the edge of the board is reached or until a square is reached that is adjacent to a mine, in which case the previous rule applies.

![Mimesweeper](https://github.com/Tina-Luk/mini-apps-minesweeper/blob/main/Minesweeper.PNG?raw=true)

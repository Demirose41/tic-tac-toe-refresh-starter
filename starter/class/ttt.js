const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {
    const OWin = ['O','O','O'];
    const XWin = ['X','X','X'];
    //Horizontal Check
    if(grid.some((row) => row.every((ele)=> ele == 'X'))){
      return 'X';
    }
    if(grid.some((row) => row.every((ele)=> ele == 'O'))){
      return 'O';
    }
    //Vertical Check
    let verticalWins = []
    for(let i = 0; i < grid[0].length; i ++ ){
      verticalWins.push(grid.map((row) => row[i]))
    }
    if(verticalWins.some((row) => row.every((ele) => ele == 'X'))){
      return 'X';
    }
    if(verticalWins.some((row) => row.every((ele) => ele == 'O'))){
      return 'O';
    }
      //Diagonal Check
    let leftToRightDiagonal = [];
    let rightToLeftDiagonal = [];
    let reversedGrid = [...grid].reverse()
    for(let i = 0; i < grid[0].length; i++){
      leftToRightDiagonal.push(grid[i][i]);
    }
    for(let i = grid[0].length - 1; i >= 0 ; i--){
      rightToLeftDiagonal.push(reversedGrid[i][i]);
    }

    if(leftToRightDiagonal.every((ele) => ele == 'X')){
      return 'X';
    }
    if(leftToRightDiagonal.every((ele) => ele == 'O' )){
      return 'O';
    }
    if(rightToLeftDiagonal.every((ele) => ele == 'X')){
      return 'X';
    }
    if(rightToLeftDiagonal.every((ele) => ele == 'O' )){
      return 'O';
    }
    else if (grid.every((row) => row.every((ele) => ele == 'X' || ele == 'O'))){
      return 'T';
    }
    
    
    else{ 
      return false;
    }
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;

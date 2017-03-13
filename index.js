const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



var Board = function() {
  return [
    [' ', '|', ' ', '|', ' '],
    ['-', '-', '-', '-', '-'],
    [' ', '|', ' ', '|', ' '],
    ['-', '-', '-', '-', '-'],
    [' ', '|', ' ', '|', ' ']
  ];
}

var wins = [
  // rows
  [[1,1], [1,3], [1,5]],
  [[3,1], [3,3], [3,5]],
  [[5,1], [5,3], [5,5]],

  // columns
  [[1,1], [3,1], [5,1]],
  [[1,3], [3,3], [5,3]],
  [[1,5], [3,5], [5,5]],

  // diagonals
  [[1,1], [3,3], [5,5]],
  [[5,5], [3,3], [1,5]]
];



var Game = function() {
  this.board = Board();
  this.players = [['player1', 'x'], ['player2', 'o']]
  this.currentTurn = this.players[0];
}

Game.prototype.printBoard = function() {
  this.board.forEach(line => {

    line.forEach(space => {
      process.stdout.write(space);
    })
    process.stdout.write('\n');
  })
}

Game.prototype.play = function() {


  // process.stdout.write(this.turn[1]);

}

Game.prototype.turn = function() {
  // print the board
  this.printBoard();

  // prompt the current player for a move

  rl.question(`${this.currentTurn[0]}, your turn: (choose [x, y]):`, answer => {

    console.log(answer);

  });

  // player places a piece where there is a blank space

  // check for a win
    // if so, print board
    // and call out winner

  // check if any more blank spaces
    // if not, game over
    // print the board
    // declare the draw


  // change whose turn it is


  // call turn for now current player.

}

Game.prototype.init = function() {
  // start it off.
  this.turn();

}

var game = new Game();

game.init();












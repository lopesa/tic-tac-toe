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

var printBoard = function() {
  board.forEach(line => {

    line.forEach(space => {
      process.stdout.write(space);
    })
    process.stdout.write('\n');
  })
}

var Game = function() {
  this.board = Board();
  this.players = [['player1', 'x'], ['player2', 'o']]
  this.turn = this.players[0];
}

Game.prototype.play = function() {


  process.stdout.write(this.turn[1]);

}

Game.prototype.takeTurn = function() {
  // the player whose turn it is
  // places a piece where there is a blank space

  // check for a win
    // if so, print board
    // and call out winner

  // check if any more blank spaces
    // if not, game over
    // print the board
    // declare the draw


  // change whose turn it is

  // print board
  // printBoard();

  // call take turn for now current player.

}

var game = new Game();

game.play();












const readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });



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

Game.prototype.play = function(coords) {

  // process.stdout.write(coords);

  // check if coordinates are in array form
  // if not prompt for new input
  // with helper text of 'needs to be an array'

  // if they are, make sure they refer to an empty space
  // if not prompt for new input
  // with helper text of 'spot not valid. Played already or not a spot'

  // if it's an empty spot
  // place it on the board and return to turn flow.


}


Game.prototype.getUserMove = function() {

  var messages = {
    'default': `${this.currentTurn[0]}, your turn: (choose [x, y]):`,
    'input invalid': 'input invalid. use x/y coordinates 1-3, for example 12 or 1,2: ',
    'spaceNotValid': 'chosen space not valid, please choose again: '
  }

  var thisQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var answerCallback = function(answer) {
    // console.log(typeof answer);
    // answer = answer * 1
    // console.log(typeof answer * 1);
    // var

    // remove commas if any

    if (answer.length > 3 || answer.length < 2
      || (answer.length === 3 && answer[1] !== ',')) {
      return question(messages['input invalid'], answer => {
        answerCallback(answer);
      });
    } else if (answer.length === 3){
      // var coordinates = []
      answer = answer.split(',');
      // console.log(answer);
    } else {
      answer = answer.split('');
    }

    answer = answer.map(coord => {
      return coord = Number.parseInt(coord)
    })


    for (var i = 0; i < answer.length; i++) {
      // console.log('Number.isInteger(answer[i])', Number.isInteger(answer[i]))
      if (!Number.isInteger(answer[i]) || answer[i] > 3 || answer[i] < 1) {
        return question(messages['input invalid'], answer => {
          answerCallback(answer);
        });
      }
    }

    // here we should have valid coordinates

    // now translate the coordinates and check if the place is available


    console.log(answer)
  }

  var question = function(message, cb) {
    // thisQuestion.close();
    thisQuestion.question(message, function(answer) {
      cb(answer);
    });

  }

  question(messages.default, answerCallback);
}



Game.prototype.turn = function() {
  // print the board
  this.printBoard();

  // prompt the current player for a move
  this.getUserMove();


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












var board = [
  [' ', '|', ' ', '|', ' '],
  ['-', '-', '-', '-', '-'],
  [' ', '|', ' ', '|', ' '],
  ['-', '-', '-', '-', '-'],
  [' ', '|', ' ', '|', ' ']
]

var printBoard = function() {
  board.forEach(line => {

    line.forEach(space => {
      process.stdout.write(space);
    })
    process.stdout.write('\n');
  })
}

printBoard();
module.exports = {
  createBoard,
  displayBoard
}

// let clear = require('clear')
// clear()

function createBoard (size) {
  let array = []
  for (let i = 0; i < size; i++) {
    array.push([])
    for (let j = 0; j < size; j++) {
      array[i].push([0])
    }
  }
  return array
}

function displayBoard (board) {
  for (let i in board) {
    console.log(board[i] + '\n')
  }
  return board
}

displayBoard(5)

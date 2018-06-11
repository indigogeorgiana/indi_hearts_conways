
module.exports = displayBoard

function displayBoard (board) {
  for (let i in board) {
    console.log(board[i] + '\n')
  }
}

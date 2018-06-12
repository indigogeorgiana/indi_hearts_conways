const createBoard = require('./createBoard')
const displayBoard = require('./displayBoard')
const nextBoard = require('./nextBoard')
const size = 5
const refreshInteral = 100

let board = createBoard(size)

setTimeout(() => {
  displayBoard(board)
  board = nextBoard(board)
}, refreshInteral)

module.exports = createBoard

function createBoard (size) {
  let boardArr = []
  for (let i = 0; i < size; i++) {
    boardArr.push([])
    for (let j = 0; j < size; j++) {
      boardArr[i].push([0])
    }
  }
  return boardArr
}

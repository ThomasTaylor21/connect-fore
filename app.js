console.log("me here")
// test out grid using 4 by 6 with decenting from top left to bottom right

/*-------------------------------- Constants --------------------------------*/

const connectForeGrid.wrapper = [
  [a1, b1, c1, d1, e1, f1, g1, h1]

// console.log(connectForeGrid)

// Winning lines where 4 in a row can exist (array)
const winningLines = [
  //vertical
[a1, b1, c1, d1, e1, f1, g1, h1]




]
console / log(winningLines);






/*---------------------------- Variables (state) ----------------------------*/
// let squares, winner, turn
// // let gameOutcome = [isTie, winner, loser]
// const player0 = -1
// const playerX = 1
// let numOfTurns
//const isTie = // === no winning combos found on the board, != winningCombos


/*------------------------ Cached Element References ------------------------*/
const boardSquares = document.querySelector(".board")
// console.log(boardSquares);

// const message = document.getElementById("message")

// const winnerLoser = document.querySelector("#winnerloser")
// console.log(winnerloser)
//Need a way to update board squares in the cached references. IN your render function, use squares - an array, to update board squares accordingly.

// const resetBtn = document.getElementById('resetBtn')

/*----------------------------- Event Listeners -----------------------------*/
// boardSquares.addEventListener("click", handleClick);


/*-------------------------------- Functions --------------------------------*/

function init() {
  conForSpots = [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null
  ]
}
console.log(conForSpots)  //these nulls refer to the game board in order
function init()

function render() {

  for (let i = 0; i < conForSpots.length; i++) {
    // console.log(squares[i])
    if ([i] === 1) {
      boardSquares.children[i].textContent = 'x'
      // message.textContent = 'Turn: O'
    } else if
      (squares[i] === -1) {
      boardSquares.children[i].textContent = '0'
      message.textContent = 'Turn: X'
    } else {
      boardSquares.children[i].textContent = ""
    }
  }
}
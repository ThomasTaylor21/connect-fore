console.log("me here")
// test out grid using 4 by 6 with decenting from top left to bottom right

/*-------------------------------- Constants --------------------------------*/

const connectForeGrid = [
 [4a, 4b, 4c, 4d],
 [3.a, 3b, 3c, 3d],
 [2a, 2b, 2c, 2d],
 [1a, 1b, 1c, 1d],
 [0a, 0b, 0c, 0d]
]
console.log(connectForeGrid)

/*---------------------------- Variables (state) ----------------------------*/
// let squares, winner, turn
// // let gameOutcome = [isTie, winner, loser]
// const player0 = -1
// const playerX = 1
// let numOfTurns
//const isTie = // === no winning combos found on the board, != winningCombos


/*------------------------ Cached Element References ------------------------*/
// const boardSquares = document.querySelector(".board")
// console.log(boardSquares);

// const message = document.getElementById("message")

// const winnerLoser = document.querySelector("#winnerloser")
// console.log(winnerloser)
//Need a way to update board squares in the cached references. IN your render function, use squares - an array, to update board squares accordingly.

// const resetBtn = document.getElementById('resetBtn')

/*----------------------------- Event Listeners -----------------------------*/
// boardSquares.addEventListener("click", handleClick);


/*-------------------------------- Functions --------------------------------*/
conForSpots = [
  null, null, null, null
  null, null, null, null
  null, null, null, null
  null, null, null, null
  null, null, null, null
]
console.log(conForSpots)  //these nulls refer to the game board in order
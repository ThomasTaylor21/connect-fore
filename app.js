console.log("me here")
// test out grid using 4 by 6 with decenting from top left to bottom right

/*-------------------------------- Constants --------------------------------*/
//set up top -drop row
// const topDropRow = 
//   [dp1, dp2, dp3, dp4, dp5, dp6, dp7] 
// console.log(connectForeGrid)

// Winning lines where 4 in a row can exist (array) may be able to set up a for each that states if blue has four consecutive spots in and of the winning combo lines that player is winner, Else if not, then Player 2 
// red has the same condition and if all 48 balls are used then it is a tie. 

// let board=document.querySelector(".board") 
// let player=document.querySelector(".player") 
// let playAgain=document.querySelector(".playAgain") 
// let restart=document.querySelector(".restart") 
// let box=0 

// const winningLines = 
//   //vertical
 
// [h1, g1, f1, e1, d1, c1, b1, a1]
// [h3, g3, f3, e3, d3, c3, b3, a3]
// [h4, g4, f4, e4, d4, c4, b4, a4]
// [h5, g5, f5, e5, d5, c5, b5, a5]
// [h6, g6, f6, e6, d6, c6, b6, a6]

// console.log(winningLines);


/*---------------------------- Variables (state) ----------------------------*/
let squares, winner, turn
// let gameOutcome = [isTie, winner, loser]
const player1 = -1
const player2 = 1
let numOfTurns
//const isTie = // === no winning combos found on the board, != winningCombos


/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector(".board")
console.log(board);
// console.log(connectForeGrid);

// const message = document.getElementById("message")

// const winnerLoser = document.querySelector("#winnerloser")
// console.log(winnerloser)
//Need a way to update board squares in the cached references. IN your render function, use squares - an array, to update board squares accordingly.

// const resetBtn = document.getElementById('resetBtn')

/*----------------------------- Event Listeners -----------------------------*/
 board.addEventListener('click' , fillCircle);
function fillCircle(evt) {
  // fill in empty circle that is clicked
  // when clicking on circle, the data will show in console.log
  console.log("clickEvent,", evt);
}

/*-------------------------------- Functions --------------------------------*/

function init() {
  board = [
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null
  ]
}
console.log(board)  //these nulls refer to the game board in order
function init()
{}
// function render() {

//   for (let i = 0; i < board.length; i++) {
//     // console.log(squares[i])
//     if ([i] === 1) {
//       conForSpots.children[i].textContent = 'x'
//       // message.textContent = 'Turn: O'
//     } else if
//       (BeforeUnloadEvent[i] === -1) {
//       conForSpots.children[i].textContent = '0'
//       message.textContent = 'Turn: X'
//     } else {
//       conForSpots.children[i].textContent = ""
//     }
//   }
// }

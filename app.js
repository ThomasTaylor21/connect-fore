console.log("me here")
// test out grid using 4 by 6 with decenting from top left to bottom right
let winFourArray = [
  [1, 2, 3, 4], 
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [11, 12, 13, 14],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [18, 19, 20, 21],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [25, 26, 27, 28],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [32, 33, 34, 35],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  [39, 40, 41, 42],
  [43, 44, 45, 46],
  [44, 45, 46, 47],
  [45, 46, 47, 48],
  [46, 47, 48, 49],
  [1, 9, 17, 25],
  [9, 17, 25, 33],
  [17, 25, 33, 41],
  [25, 33, 41, 49],
  [2, 10, 18, 26],
  [10, 18, 26, 34],
  [18, 26, 34, 42],
  [3, 11, 19, 27],
  [11, 19, 27, 35],
  [4, 12, 20, 28],
  [8, 16, 24, 32],
  [16, 24, 32, 40],
  [24, 32, 40, 48],
  [15, 23, 31, 39],
  [23, 31, 39, 47],
  [22, 20, 38, 46],
]
console.log(winFourArray);

/*-------------------------------- Constants --------------------------------*/
//set up top -drop row
// const topDropRow = 
//   [dp1, dp2, dp3, dp4, dp5, dp6, dp7] 
// console.log(connectForeGrid)

// Winning lines where 4 in a row can exist (array) may be able to set up a for each that states if blue has four consecutive spots in and of the winning combo lines that player is winner, Else if not, then Player 2 
// red has the same condition and if all 48 balls are used then it is a tie. 

// let board=document.querySelector(".board") 
let player=document.querySelector(".player") 
let playAgain=document.querySelector(".playAgain") 
let restart=document.querySelector(".restart") 
let box=0 

// const winningLines = 
// function filterInt(value) {
//   if (/^[-+]?(\d+|Infinity)$/.test(value)) {
//     return Number(value)
//   } else {
//     return NaN
//   }
 //vertical

// [h1, g1, f1, e1, d1, c1, b1, a1]
// [h3, g3, f3, e3, d3, c3, b3, a3]
// [h4, g4, f4, e4, d4, c4, b4, a4]
// [h5, g5, f5, e5, d5, c5, b5, a5]
// [h6, g6, f6, e6, d6, c6, b6, a6]

// console.log(winningLines);


/*---------------------------- Variables (state) ----------------------------*/

// let gameOutcome = [isTie, winner, loser]
const playerBlue = -1
const playerRed = 1
let winner, turn, board
//const isTie = // === no winning combos found on the board, != winningCombos


/*------------------------ Cached Element References ------------------------*/
let board=document.querySelector(".board")
console.log(board);
// console.log(connectForeGrid);

// const message = document.getElementById("message")

// const winnerLoser = document.querySelector("#winnerloser")
// console.log(winnerloser)
//Need a way to update board squares in the cached references. IN your render function, use squares - an array, to update board squares accordingly.

// const resetBtn = document.getElementById('resetBtn')

/*----------------------------- Event Listeners -----------------------------*/
{
board.addEventListener('click', fillCircle);
//   function fillCircle(click, evt)
  
   // fill in empty circle that is clicked
  // when clicking on circle, the data will show in console.log

//console.log('click' , evt)
/*-------------------------------- Functions --------------------------------*/
}
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
function render() {

  for (let i = 0; i < board.length; i++) {
    // console.log(squares[i])
    if ([i] === 1) {
      board.children[i].textContent = 'blue'
      message.textContent = 'Turn: blueO'
    } else if
      (BeforeUnloadEvent[i] === -1) {
      board.children[i].textContent = 'red'
      message.textContent = 'Turn: blue'
    } else {
      board.children[i].textContent = ""
    }
  }
}

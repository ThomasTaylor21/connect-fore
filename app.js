console.log("me here")
// test out grid using 4 by 6 with decenting from top left to bottom right
/*-------------------------------- Constants --------------------------------*/
//set up top -drop row
const winFourArray = [
  [0, 1, 2, 3],
  [3, 4, 5, 6],
  [7, 8, 9, 10], 
  [10, 11, 12, 13], 
  [14, 15, 16, 17], 
  [17, 18, 19, 20], 
  [21, 22, 23, 24], 
  [24, 25, 26, 27], 
  [28, 29, 30, 31], 
  [31, 32, 33, 34], 
  [35, 36, 37, 38], 
  [38, 39, 40, 41], 
  [0, 7, 14, 21], 
  [1, 8, 15, 22], 
  [2, 9, 16, 23], 
  [3, 10, 17, 24], 
  [4, 11, 18, 25], 
  [5, 12, 19, 26], 
  [6, 13, 20, 27], 
  [14, 21, 28, 35], 
  [15, 22, 29, 36], 
  [16, 23, 30, 37], 
  [17, 24, 31, 38], 
  [18, 25, 32, 39], 
  [19, 26, 33, 40], 
  [20, 27, 34, 41], 
  [14, 22, 30, 38], 
  [15, 23, 31, 39], 
  [16, 24, 32, 40], 
  [17, 25, 33, 41], 
  [17, 23, 29, 35], 
  [18, 24, 30, 36], 
  [19, 25, 31, 37], 
  [20, 26, 32, 38], 
  [10, 16, 22, 28], 
  [11, 17, 23, 29], 
  [12, 18, 24, 30], 
  [13, 19, 25, 31], 
  [7, 15, 23, 31], 
  [8, 16, 24, 32], 
  [9, 17, 25, 33], 
  [10, 18, 26, 34], 
  [0, 8, 16, 24], 
  [1, 9, 17, 25], 
  [2, 10, 18, 26], 
  [3, 11, 19, 27], 
  [3, 9, 15, 21], 
  [4, 10, 16, 22], 
  [5, 11, 17, 23], 
  [6, 12, 18, 24], 
  [36, 37, 38, 39], 
  [37, 38, 39, 40], 
  [29, 30, 31, 32], 
  [30, 31, 32, 33], 
  [22, 23, 24, 25], 
  [23, 24, 25, 26], 
  [15, 16, 17, 18], 
  [16, 17, 18, 19], 
  [8, 9, 10, 11], 
  [9, 10, 11, 12], 
  [1, 2, 3, 4], 
  [2, 3, 4, 5], 
  [7, 14, 21, 28], 
  [8, 15, 22, 29], 
  [9, 16, 23, 30], 
  [10, 17, 24, 31], 
  [11, 18, 25, 32], 
  [12, 19, 26, 33], 
  [13, 20, 27, 34],
]

console.log(winFourArray);


/*---------------------------- Variables (state) ----------------------------*/

// Winning lines where 4 in a row can exist (array) may be able to set up a for each that states if blue has four consecutive spots in and of the winning combo lines that player is winner, Else if not, then Player 2 
// red has the same condition and if all 48 balls are used then it is a tie. 

// let board=document.querySelector(".board") 
// let player=document.querySelector(".player") 
// let playAgain=document.querySelector(".playAgain") 
// let restart=document.querySelector(".restart") 
// let box=0 

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



// let gameOutcome = [isTie, winner, loser]
// const playerBlue = -1
// const playerRed = 1
// let winner, turn, board
//const isTie = // === no winning combos found on the board, != winningCombos


/*------------------------ Cached Element References ------------------------*/
let boardArray=document.querySelector(".boardArray")
console.log(boardArray);

// const message = document.getElementById("message")

// const winnerLoser = document.querySelector("#winnerloser")
// console.log(winnerloser)
//Need a way to update board squares in the cached references. IN your render function, use squares - an array, to update board squares accordingly.

// const resetBtn = document.getElementById('resetBtn')

/*----------------------------- Event Listeners -----------------------------*/
// init()
// board.forEach(function(fillCircle){
// fillCircle.addEventListener('click' , handleClick)
// // function fillCircle(evt) {
//   // fill in empty circle that is clicked
//   // when clicking on circle, the data will show in console.log
//   console.log("clickEvent,", evt);
// });




// function handleClick(click, evt) {
//   board.function(fillCircle)
//   board.addEventListener("click" , handleClick)
// }
// console.log(boardArray);

  // function fillCircle(click, evt)
  
   // fill in empty circle that is clicked
  // when clicking on circle, the data will show in console.log

//console.log('click' , evt)
/*-------------------------------- Functions --------------------------------*/

function init() {
  boardArray = [
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null
    
  ]
}
console.log(boardArray)  //these nulls refer to the game board in order
// function init()

// function render() {

//   for (let i = 0; i < board.length; i++) {
//     // console.log(squares[i])
//     if ([i] === 1) {
//       board.children[i].textContent = 'blue'
//       message.textContent = 'Turn: blueO'
//     } else if
//       (BeforeUnloadEvent[i] === -1) {
//       board.children[i].textContent = 'red'
//       message.textContent = 'Turn: blue'
//     } else {
//       board.children[i].textContent = ""
//     }
//   }
// }

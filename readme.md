# Project Nme: Connect-Fore


## GAME Link
### https://github.com/ThomasTaylor21/connect-fore


## Pseudo Code:
  

  
Create a playing grid that is 6 x 8 for discs
Create a virtual stack of 2 x 24 discs (24 Blue and 24 Red) ~this would make it possible for a tie if both players use all 24 discs.
ref https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout

Create a Player Turn function rotating each  as every other play. (lock the non-playing player until the other has placed with his/her disc. This will cycle until one player reaches a consecutive 4 discs in any pattern.

Start with creating an array six rows (0-41) by 7 columns(a, b, c, d, e, f, g) will be specified in HTML as id for grid(a ) that coordinates with top left to right, then next row down until the last lower right spot is 41g) This will be reflected as an array, then do the same for the next 7 columns. 

By doing this it will provide a vector to be populated by disc 1 or disc2.

Hint: Flexbox Group 

 Create a  "drop disc" sound for each disc. Hint: Adding sound to webpage lecture.
 Show what player is up.
 Show when the player has reached 4 connected discs as "WINNER"  and Sparkle.
 Create a Reset Button when the winner has been declared so players can play again.

### Connect-fore (Take a look)

https://imgur.com/mFJHKqU

## Technology

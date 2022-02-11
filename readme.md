Project Nme: Connect-Fore
Pseudo Code:
  
Create a playing grid that is 6 x 8 for discs
Create a virtual stack of 2 x 24 discs (24 Blue and 24 Red) ~this would make it possible for a tie if both players use all 24 discs.
ref https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout

Create a Player Turn function rotating each  as every other play. (lock the non-playing player until the other has placed with his/her disc. This will cycle until one player reaches a consecutive 4 discs in any pattern.
Start with creating one column with six down frid that will be id as grid coordinate (ex. Reverse the vertical by starting with the bottom being 0A and then upward 1q. 2a. 3a.4a.5a. This will be reflected as an array, then do the same for the next 7 columns. 
By doing this it will provide a vector to be populated by disc 1 or disc2.
Hint: Flexbox Group up grid
Create a  "drop disc" sound for each disc. Hint: Adding sound to webpage lecture.
Show what player is up.
Show when the player has reached 4 connected discs as "WINNER"  and Sparkle.
Create a Reset Button when the winner has been declared so players can play again.




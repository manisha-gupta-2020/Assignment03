/* The “Coin Flip” Game

Usage: Use nested conditional statements

In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”.*/

//  creating a variable called coinFlip and set it equal to a random number using Math.random. math.radom() return a floating point number between 0 and 1. maath .sound) will ensure its either 0 or 1. the result will be heads if random number is 0 else it will be tails

let coinFlip = Math.round(Math.random());


// askuser to choose heads or tails

let userChoice = prompt("Enter your choice, 0 for heads or 1 for tails: ");
window.document.write(" Let play coin flip </br> </br> </br> ");
if(coinFlip == 0  && userChoice == 0){
    window.document.write("The flip was heads and you chose heads...you win! ");
} else if(coinFlip == 0 && userChoice == 1){
    window.document.write("The flip was heads but you chose tails...you lose! ");
} else if(coinFlip == 1 && userChoice == 0){
    window.document.write("The flip was tails but you chose heads...you lose! ");
} else if(coinFlip == 1  && userChoice == 1 ){
    window.document.write("The flip was tails and you chose tails...you win! ");
} else {
    window.document.write("You entered wrong choice. Bye.") ;
}
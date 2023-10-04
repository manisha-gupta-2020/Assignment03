/* The “Grade Assigner” Application

Usage: Use else if or switch statements

Collect the a number between 1 and 100 from the user.
Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console. */

let score = parseInt(prompt("Enter your score ( 1- 100) to see your grade: "));
switch (true) {
    case (score < 1 || score > 100):
        console.log("Your score must be between 1 and 100")
        break;
    case (score < 60 ):
        console.log("You received an F")
        break;        
    case (score >= 60 && score <= 69):
            console.log("You received a D")
            break;
    case (score >= 70 && score <= 79):
            console.log("You received a C")
            break;
    case (score >= 80 && score <= 89):
            console.log("You received a B")
            break;
    case (score >= 90 && score <= 100):
            console.log("You received an A")
            break;
    default:
        break;
}
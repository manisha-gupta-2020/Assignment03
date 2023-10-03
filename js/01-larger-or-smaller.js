/*
Larger or Smaller?

Usage: Use simple conditional statements

Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.
*/
let int1 = parseInt(window.prompt("Enter first integer: "));
let int2 = parseInt(window.prompt("Enter second integer: "));

if(int1 > int2){
    window.document.write(`integer one: ${int1} is larger than integer two: ${int2}. `);
    } else if(int1 < int2 ){
        window.document.write(`integer two: ${int2} is larger than integer one: ${int1} `);
        } else {
           window.document.write(`integer one: ${int1} is equal to integer two: ${int2}. `);
            }

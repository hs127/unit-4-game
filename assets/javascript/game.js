
// Have a random number  generated for user to guess
// Have a random number generate for each gemstone 
//When a user clicks on a stone to do the following
    //store what stone has been selected 
    // increase total score  
    //check if it exceeds, meets, or is less than randomNumtoGuess
    //if less than: keep counting for more clicks and push to an array and update totalScore 
     //if exceeds: restart game, var loss increments,var randomNumtoGuess is generated, var random number is generated for stone
     //if meets: restarts game, var win increments, var randomNumtoGuess is generated, var radom number is generated for each stone 
//have a function to start game 
//have a reset function
//have a checker function 
//have a function to generate randomNumtoGuess
//have a function to generate random numner for each Image 

//GLOBAL VARIABLES 
var chosenNum = 0;  
var redNum = 0; //random number associated with ruby button 
var blueNum = 0; //random number associated with sapphire button 
var greenNum = 0; //random number associated with emerald button 
var whiteNum = 0; //random number associated with pearl button 
var stonesPicked = []; 
var stoneOptions = []; 

//game counters 
var winCount = 0; 
var lossCount = 0; 
var userGuessCount = 0; 
//FUNCTIONS

function startGame () {
    //generate number from 19 - 120 
 chosenNum = Math.floor(Math.random() * (102)) + 19;
    //generate number from 1-12 
 redNum = Math.floor(Math.random() * (12)) + 1;
 console.log(chosenNum); 
 console.log(redNum); 
}

startGame(); 
//MAIN PROCESS 



     
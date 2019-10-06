

//Startgame function: Have a random number generated for user to guess
//Startgame function: Have a random number generate for each gemstone 
//When a user clicks on a stone to do the following
//for each round
//store what stone has been selected 
// increase total score by what the user selected 
//check if it exceeds, meets, or is less than randomNumtoGuess
//if less than: keep counting for more clicks and push to an array and update totalScore 
//if exceeds: restart game, var loss increments,var randomNumtoGuess is generated, var random number is generated for stone
//if meets: restarts game, var win increments, var randomNumtoGuess is generated, var radom number is generated for each stone 
//have a function to start game / reset game 
//function for each button click 
//have a checker function 
//have a function to generate randomNumtoGuess
//have a function to generate random numner for each Image 


//GLOBAL VARIABLES 
// object
var stoneCollection = {
    ruby: {
        color: "red",
        value: 0,
        click: 0    
    },

    sapphire: {
        color: "blue",
        value: 0,
        click: 0
    },

    emerald: {
        color: "green",
        value: 0,
        click: 0
    },

    pearl: {
        color: "white",
        value: 0,
        click: 0
    }

};

//game counters 
var winCount = 0;
var lossCount = 0;
var userGuessTotal = 0;
var chosenNum = 0; //sum of the array 
//FUNCTIONS

$(document).ready(function(){
$(".beginGame").hide();

$(".startbtn").click(function () {
 $(".beginGame").show();
$(".startSection").hide(); 
}); 

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//start
//clickevent
//checker function (inside tufnciton)
//reset 

function startGame() {
    chosenNum = Math.floor(Math.random() * (102)) + 19;
    console.log(chosenNum);
    userGuessTotal = 0; // move to reset 
    $("#randomNumber").html(chosenNum);
    $("#wins").html(winCount);
    $("#losses").html(lossCount);
     $("#totalScore").html(userGuessTotal);
    // userTotal = []; don't need 
    // loop for each stone to assign value a randome number 
    $.each(stoneCollection, function (key, value) {
        console.log(key, value);
        stoneCollection[key].value = getRandom(1, 12);
        console.log("random value :" + stoneCollection[key].value);
    });
}

//Click Events - Main Process

$("#blue").click(function () {
    userGuessTotal += stoneCollection.sapphire.value;
    console.log("testing blue : " + userGuessTotal);
    checker();
});

$("#white").click(function () {
    userGuessTotal += stoneCollection.pearl.value;
    console.log("testing pearl : " + userGuessTotal);
    checker();
});

$("#red").click(function () {
    userGuessTotal += stoneCollection.ruby.value;
    console.log("testing ruby : " + userGuessTotal);
    checker();
});

$("#green").click(function () {
    userGuessTotal += stoneCollection.emerald.value;
    console.log("testing emerald : " + userGuessTotal);
    checker();
});

startGame();

function checker() {
    if (userGuessTotal == chosenNum) {
        winCount++;
        console.log("win: " + winCount);
        startGame();
    }

    else if (userGuessTotal > chosenNum) {
        lossCount++;
        console.log("loss: " + lossCount);
        startGame();
    }

    else {
        console.log("still in the round");
    }
        
    $("#totalScore").html(userGuessTotal);
    $("#wins").html(winCount);
    $("#losses").html(lossCount);
}


});


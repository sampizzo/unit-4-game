var wins = 0;
var losses = 0;
var playerScore = 0;

//generate random number between 19-120
//assign random number to var targetScore
var targetScore = Math.floor(Math.random() * 120) + 19;
console.log("targetScore: " + targetScore);

$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
//display targetScore
$("#target-score").html("Target Score: " + targetScore);
$("#player-score").html("Player Score: " + playerScore);


//create a loop that generates a random number between 1-12 and assign each random number to each of the 4 crystals



//clicking a crystal adds its hidden value to the playerScore

//if playerScore === targetScore, the player wins, increment wins, reset game

//else if playerScore > targetScore, the player loses, increment losses, reset game

//else game continues 

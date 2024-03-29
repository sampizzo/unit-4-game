var wins = 0;
var losses = 0;
var targetScore = 0;
var playerScore = 0;

var crystals = [
  "assets/images/rupee-red.png",
  "assets/images/rupee-blue.png",
  "assets/images/rupee-green.png",
  "assets/images/rupee-orange.png"
];

var crystalValues = [];


//generate random number between 19-120
//assign random number to var targetScore
function genTargetScore() {
  targetScore = Math.floor(Math.random() * 120) + 19;
  console.log("targetScore: " + targetScore);
  $("#target-score").html("Target Score: " + targetScore);
}

$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
//display targetScore
$("#target-score").html("Target Score: " + targetScore);
$("#player-score").html("Player Score: " + playerScore);
$("#red").html("<img src='" + crystals[0] + "'>");
$("#blue").html("<img src='" + crystals[1] + "'>");
$("#green").html("<img src='" + crystals[2] + "'>");
$("#orange").html("<img src='" + crystals[3] + "'>");

//create a loop that generates a random number between 1-12 and assign each random number to each of the 4 crystals
function genCrystalVals() {
  crystalValues = [];
  //clear the array, so when you push you are starting from 0 again.
  crystalValues.length = 0;
  for (var i = 0; i < 4; i++) {
    var randomNum = Math.floor(Math.random() * 12) + 1;
    console.log(randomNum);
    crystalValues.push(randomNum);
  }
}

//reset game values
function resetGame() {
  playerScore = 0;
  console.log("Player score: " + playerScore);
  $("#target-score").html("Target Score: " + targetScore);
  $("#player-score").html("Player Score: " + playerScore);
  genTargetScore();
  genCrystalVals();
}

genTargetScore();
genCrystalVals();

//clicking a crystal adds its hidden value to the playerScore
$("#red").on("click", function() {
  console.log("red clicked");
   playerScore = playerScore + crystalValues[0];
  

  console.log(playerScore);
  $("#player-score").html("Player Score: " + playerScore);
  if (playerScore === targetScore) {
    console.log("ps: " + playerScore);
    console.log("ts: " + targetScore);
    wins++;
    $("#wins").html("Wins: " + wins);
    alert("You win!");
    resetGame();
  }
  if (playerScore > targetScore) {
    console.log("ps: " + playerScore);
    console.log("ts: " + targetScore);
    losses++;
    $("#losses").html("Losses: " + losses);
    alert("Sorry! You lost!");
    resetGame();
  }
});

$("#blue").on("click", function() {
  console.log("blue clicked");
  playerScore = playerScore + crystalValues[1];
  console.log(playerScore);
  $("#player-score").html("Player Score: " + playerScore);
  if (playerScore === targetScore) {
    console.log("ps: " + playerScore);
    console.log("ts: " + targetScore);
    wins++;
    $("#wins").html("Wins: " + wins);
    alert("You win!");
    resetGame();
  }
  if (playerScore > targetScore) {
    console.log("ps: " + playerScore);
    console.log("ts: " + targetScore);
    losses++;
    $("#losses").html("Losses: " + losses);
    alert("Sorry! You lost!");
    resetGame();
  }
});

$("#green").on("click", function() {
  console.log("green clicked");
  playerScore = playerScore + crystalValues[2];
  console.log(playerScore);
  $("#player-score").html("Player Score: " + playerScore);
  if (playerScore === targetScore) {
    console.log("ps: " + playerScore);
    console.log("ts: " + targetScore);
    wins++;
    $("#wins").html("Wins: " + wins);
    alert("You win!");
    resetGame();
  }
  if (playerScore > targetScore) {
    console.log("ps: " + playerScore);
    console.log("ts: " + targetScore);
    losses++;
    $("#losses").html("Losses: " + losses);
    alert("Sorry! You lost!");
    resetGame();
  }
});

$("#orange").on("click", function() {
  console.log("orange clicked");
  playerScore = playerScore + crystalValues[3];
  console.log(playerScore);
  $("#player-score").html("Player Score: " + playerScore);
  if (playerScore === targetScore) {
    console.log("ps: " + playerScore);
    console.log("ts: " + targetScore);
    wins++;
    $("#wins").html("Wins: " + wins);
    alert("You win!");
    resetGame();
  }
  if (playerScore > targetScore) {
    console.log("ps: " + playerScore);
    console.log("ts: " + targetScore);
    losses++;
    $("#losses").html("Losses: " + losses);
    alert("Sorry! You lost!");
    resetGame();
  }
});
//if playerScore === targetScore, the player wins, increment wins, reset game

//else if playerScore > targetScore, the player loses, increment losses, reset game

//else game continues

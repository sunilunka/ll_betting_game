
;(function( $, window, document){


// Generating number to guess
  var generateNumber = function(){
    numberToGuess = (Math.round(Math.random() * 10))
    console.log(numberToGuess);
    return numberToGuess;
  };


  //getting data
  var getGuess = function(){
    guessField = document.getElementById("numberguess")
    guessValue = guessField.value;
    console.log(guessValue);
    return guessValue;
  };

  var getBet = function(){
    betField = document.getElementById("bet");
    betAmount = betField.value;
    console.log(betAmount);
    return betAmount;
  };


// Game logic

// User starts with $100

  var userFunds = 100;


  var workOutBet = function(number, guess, bet){
    console.log(number, guess, bet);
    var guessNumber = parseInt(guess),
        userBet = parseInt(bet);

    if (guessNumber === number) {
      userFunds += (userBet*2);
    } else if ((guessNumber < (number - 1 )) || (guessNumber > (number + 1 ))) {
      userFunds -= userBet;
    };

    console.log(userFunds);


  };  


// Events logic
  var $submit = $("#submit");

  $submit.on("click", function(event){
    event.preventDefault();
    workOutBet(generateNumber(), getGuess(), getBet());
    displayUserFunds();

  });

// Display Logic

var displayUserFunds = function(){
  $("#funds").html(userFunds);
};

  $(document).ready(function(){
    displayUserFunds();  
  });

  

}( jQuery, window, document));
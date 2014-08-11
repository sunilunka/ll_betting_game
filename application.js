
;(function( $, window, document){


// Generating number to guess
  var generateNumber = function(){
    numberToGuess = (Math.round(Math.random() * 10))
    console.log(numberToGuess);
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
  };  


// Events logic
  var $submit = $("#submit");

  $submit.on("click", function(event){
    event.preventDefault();
    workOutBet(generateNumber(), getGuess(), getBet());

  });

  

}( jQuery, window, document));
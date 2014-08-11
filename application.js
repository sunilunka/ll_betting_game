
;(function( $, window, document){

  var generateNumber = function(){
    numberToGuess = (Math.round(Math.random() * 10))
    console.log(numberToGuess);
  };

  generateNumber();

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

  var $submit = $("#submit");

  $submit.on("click", function(event){
    event.preventDefault();
    getGuess();
    getBet();
  });

  

}( jQuery, window, document));
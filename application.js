
;(function( $, window, document){

  var generateNumber = function(){
    numberToGuess = (Math.round(Math.random() * 10))
    console.log(numberToGuess);
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
    getBet();
  });

  generateNumber();

}( jQuery, window, document));
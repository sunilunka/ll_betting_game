
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
    guessValue = parseInt(guessField.value);
    console.log(guessValue);
    return guessValue;
  };

  var getBet = function(){
    betField = document.getElementById("bet");
    betAmount = parseInt(betField.value);
    console.log(betAmount);
    return betAmount;
  };


  // User starts with $100

  var userFunds = 100;


  var checkFunds = function(funds){  
    if(userFunds >= getBet() && userFunds > 4) {
      checkBet(getBet());
    } else {
      $("#warning").text("Sorry, you lose.").stop().slideDown("fast");
    };
  };


// Game logic



  var workOutBet = function(number, guess, bet){
    console.log(number, guess, bet);
    var guessNumber = guess,
        userBet = bet;

    if (guessNumber === number) {
      userFunds += (userBet*2);
    } else if ((guessNumber < (number - 1 )) || (guessNumber > (number + 1 ))) {
      if ( userFunds > 4 ) {
        userFunds -= userBet;
      } else {
        userFunds = 0;
        $("#warning").text("Game over, you lose.").stop().slideDown("fast");
      };
    };

    displayUserFunds();

    console.log(userFunds);


  };  


  var checkBet = function(num) {
    if ((num <= 10 ) && (num >= 5)) {
      workOutBet(generateNumber(), getGuess(), num);
    } else {
      $("#betwarning").fadeIn("fast").delay(3000).fadeOut("fast");
    };
  };

// Display Logic

var displayUserFunds = function(){
  $("#funds").find("span").html(userFunds);
};

var clearValue = function(){
  $("#bet").val("");
   $("#numberguess").val("");
};

// Events logic
  var $submit = $("#submit"),
      $playAgain = $("#playagain");

  $submit.on("click", function(event){
    event.preventDefault();
    checkFunds(userFunds);
    // workOutBet(generateNumber(), getGuess(), getBet());

  });

  $playAgain.on("click", function(event){
    event.preventDefault();
    userFunds = 100;
    clearValue();
    console.log(userFunds);
    displayUserFunds();
  });

// Display Logic



  $(document).ready(function(){
    displayUserFunds();  
  });

  

}( jQuery, window, document));
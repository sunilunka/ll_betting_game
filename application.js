
;(function( $, window, document){

  var getBet = function(){
    betField = document.getElementById("bet");
    betAmount = betField.value;
    console.log(betAmount);
  };

  var $submit = $("#submit");

  $submit.on("click", function(event){
    event.preventDefault();
    getBet();
  });


}( jQuery, window, document));
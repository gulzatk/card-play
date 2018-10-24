
$(document).ready(function() {
  // event.preventDefault();

  var suits = ["diamonds", "spades", "hearts", "clubs"]
  var values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, "Jack", "Queen", "King"]
var cards = [];
// for (i = 0; i < suits.length; i ++){
//   for (j = 0; j < values.length; j ++){
//    $(".list").append("<li>" + suits[i] + "of" + values[j] + "</li>");
//   }
// }
  suits.forEach(function(suit){
   values.forEach(function(value){
    $(".list").append("<li>" + suit + "of" + value + "</li>")
  });
});



  });

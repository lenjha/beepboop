//back-end logic
var outputArray = [];
// var newNum = 0





function counting (number) {
  for (var i = 0; i <= number; i++){
    outputArray.push(i);
  }
}
//









//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#userInput").val());
    // outputArray.pop(newNum)
    counting(number);
    alert(outputArray);

  }); //#inputForm submission event!
}); //document-ready!

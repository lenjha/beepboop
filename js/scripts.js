//back-end logic
var outputArray = [];

function counting (number, name) {
  for (var newNumber = 0; newNumber <= number; newNumber++){

    var newNumberString = newNumber.toString();

    if (newNumberString.includes("1") === true) {
      outputArray.push(" *boop!*");
    }
    if (newNumberString.includes("0") === true) {
      outputArray.push(" *beep!*")
    }
      else if (newNumber % 3 === 0 && 0 < newNumber) {
        outputArray.push(" sowwie " + name + "!");
      }

    if ((newNumberString.includes("1") === false) && (newNumberString.includes("0") === false) && (newNumber % 3 !== 0)) {
      outputArray.push(" " + newNumber);
    }

    //REMOVE ALL NUMBERS CONTAINING 1 OR 2 FROM OUTPUTARRAY
  }
}



//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var name = ($("#name").val());
    var number = parseInt($("#userInput").val());
    var numberLength = (number.toString().length)
    alert(name)
    counting(number, name);
    $("#results").append("<li>" + outputArray + "</li>");
    event.preventDefault();
  }); //#inputForm submission event!
}); //document-ready!

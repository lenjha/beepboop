//back-end logic
var outputArray = [];

function counting (number) {
  for (var newNumber = 0; newNumber <= number; newNumber++){

    var newNumberString = newNumber.toString();

    if (newNumberString.includes("1") === true) {
      outputArray.push("boop!");
    }
    if (newNumberString.includes("0") === true) {
      outputArray.push("beep!")
    }
      else if (newNumber % 3 === 0 && 0 < newNumber) {
        outputArray.push(" sorry Dave");
      }

    outputArray.push(" " + newNumber);

    //REMOVE ALL NUMBERS CONTAINING 1 OR 2 FROM OUTPUTARRAY
  }
}



//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#userInput").val());
    // var name = $("#nameInput").val();
    var numberLength = (number.toString().length)
    counting(number);
    $("#results").append(outputArray + " ");
    // alert("This number is " + numberLength + " digits long.")
  }); //#inputForm submission event!
}); //document-ready!

//back-end logic
var outputArray = [];

function counting (number, name) {
  for (var newNumber = 0; newNumber <= number; newNumber++){

    var newNumberString = newNumber.toString();

    if (newNumberString.includes("1") === true) {
      outputArray.push(" ﹡ᵇᵒᵒᵖ﹗﹡");
    }
    if (newNumberString.includes("0") === true) {
      outputArray.push(" ﹡ᵇᵉᵉᵖ﹗﹡")
    }
      else if (newNumber % 3 === 0 && 0 < newNumber) {
        outputArray.push(" ˢᵒʷʷᶦᵉ, " + name + "﹗ <li>⁽ᵈᵃᵗ ʷᵘᶻ ᵃ ʰᶦᶜᶜᵘᵖˢ⋅⋅⋅⁾</li>");
      }

    if ((newNumberString.includes("1") === false) && (newNumberString.includes("0") === false) && (newNumber % 3 !== 0)) {
      outputArray.push(" " + newNumber);
    }
  }
  outputArray.forEach(function(output) {
    $("#results").prepend("<li>" + output + "</li>");
  });
  $("#resultsDiv").show();
}

function nameProcess (name) {
  if (name === "Tyler") {
    $("#results").prepend("ᵒʰᵃᶦ ᵘ ᵐᵘˢ ᵇᵉ ᵗᵉᵃᶜʰᵘʳ﹗");
  }
  if (name === "Lena") {
    $("#results").prepend("ʸ ᵘ ᵐᵉᵏ ᵐᵉ⋅⋅⋅﹖");
  }
  if (name.length = 3) {
    $("#results").prepend("ˢʰᵃʷᵗ ᶰᵃᵉᵐᵘ﹗");
  }
}


//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var name = ($("#name").val());
    var number = parseInt($("#userInput").val());

    nameProcess(name);
    counting(number, name);
    var backwardsCount = outputArray.reverse()

    $("#backwards").click(function(event) {
      $("#results").prepend("<li>" + backwardsCount + "</li>");
    });
    event.preventDefault();
  }); //#inputForm submission event!
}); //document-ready!

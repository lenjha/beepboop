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
        outputArray.push(" ˢᵒʷʷᶦᵉ, " + name + "﹗  ᶦ'ᵐ ᵃᶠʷᵃᶦᵈ ᶦ ᶜᵃᶰᶰᵒᵗ ᶜᵒᵘᶰᵗ ᵈᶦˢ ᶦᶰᵗᵃʲᵉʳ﹗");
      }

    if ((newNumberString.includes("1") === false) && (newNumberString.includes("0") === false) && (newNumber % 3 !== 0)) {
      outputArray.push(" " + newNumber);
    }
  }
  outputArray.forEach(function(output) {
    $("#results").append("<li>" + output + "</li>");
  });
  $("#resultsDiv").show();
}

function nameProcess (name, number) {
  if (name === "Tyler") {
    $("#results").prepend("<span class='dialogue'>ᵒʰᵃᶦ ᵘ ᵐᵘˢ ᵇᵉ ᵗᵉᵃᶜʰᵘʳ﹗</span>");
  }
  if (name === "Lena") {
    $("#results").prepend("<span class='dialogue'>ʸ ᵘ ᵐᵉᵏ ᵐᵉ⋅⋅⋅﹖</span>");
  }
  if (name.length < 4) {
    $("#results").prepend("<span class='dialogue'>ᵈᵃ'ˢ ᵃ ˢʰᵃʷᵗ ᶰᵃᵉᵐᵘ﹗</span>");
  }
  if (name.length > 15) {
    $("#results").prepend("<span class='dialogue'>⋅⋅⋅ ᵈᵃ'ˢ ᵃ ʷᵉᵃʷʷʸ ʷᵒᶰᵍ ᶰᵃᵉᵐᵘ⋅⋅⋅</span>");
  }
  if (number = 7) {
    $("#results").prepend("<span class='dialogue'>ˢʰᵉᵇᵇᵉᶰ ᵐᵃʰ ᶠᵃᵛ ᶰᵘᵐᵇᵃʰ﹗</span>");
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
      $("#results").prepend("<li>" + backwardsCount + "</li><li><span class=didIt>****ʸᵉʸ ᶦ ᵈᶦᵈ ᶦᵗ﹗****</span></li>");
    });
    event.preventDefault();
  }); //#inputForm submission event!
}); //document-ready!

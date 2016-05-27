var questionOne = prompt("Was I born in North Dakota?").toLowerCase();

if (questionOne === 'no' || questionOne === "n") {
  alert("Good Job! You're off to a good start.");
} else if (questionOne === 'yes' || questionOne === "y") {
  alert("Wrong! I was born in South Dakota.");
} else {
  alert("That was not a valid response. You still get it wrong!");
}

var questionTwo = prompt("Is one of my favorite pastimes skateboarding?").toLowerCase();

if (questionOne === 'yes' || questionOne === "y") {
  alert("Correct! I once broke both bones in my left arm at the same time!");
} else if (questionOne === 'no' || questionOne === "n") {
  alert("Wrong! I don't skate as much anymore but I still love to ride around.");
} else {
  alert("That was not a valid response. You still get it wrong!");
}

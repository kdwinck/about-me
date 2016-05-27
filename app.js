var questionOne = prompt("Was I born in North Dakota?").toLowerCase();

if (questionOne === 'no' || questionOne === "n") {
  alert("Good Job! You're off to a good start.");
} else if (questionOne === 'yes' || questionOne === "y") {
  alert("Wrong! I was born in South Dakota.");
} else {
  alert("That was not a valid response. You still get it wrong!");
}

var questionTwo = prompt("Is one of my favorite pastimes skateboarding?").toLowerCase();

if (questionTwo === 'yes' || questionTwo === "y") {
  alert("Correct! I once broke both bones in my left arm at the same time!");
} else if (questionTwo === 'no' || questionTwo === "n") {
  alert("Wrong! I don't skate as much anymore but I still love to ride around.");
} else {
  alert("That was not a valid response. You still get it wrong!");
}

var questionThree = prompt("Do I own a lot of board games?").toLowerCase();

if (questionThree=== 'yes' || questionThree === "y") {
  alert("Yes! I own many board games. My favorite one is Arkham Horror!");
} else if (questionThree === 'no' || questionThree === "n") {
  alert("Wrong! I have a whole bookshelf full of them!");
} else {
  alert("That was not a valid response. You still get it wrong!");
}

var questionFour = prompt("Have I ever met a celebrity?").toLowerCase();

if (questionFour=== 'yes' || questionFour === "y") {
  alert("Great work! I once met Prince on a plane!");
} else if (questionThree === 'no' || questionThree === "n") {
  alert("Incorrect. You will have to get it right to see who it was!");
} else {
  alert("That was not a valid response. You still get it wrong!");
}

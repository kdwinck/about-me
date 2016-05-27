var userName = prompt("Identify yourself user?"); // This will get the users name

var questionOne = prompt("Was I born in North Dakota? (Please answer yes or no)").toLowerCase();

if (questionOne === 'no' || questionOne === "n") {
  alert("Good Job " + userName + "! You're off to a good start.");
} else if (questionOne === 'yes' || questionOne === "y") {
  alert("You're wrong " + userName + "! I was born in South Dakota.");
} else {
  alert("That was not a valid response. You still get it wrong!");
}

var questionTwo = prompt("Is one of my favorite pastimes skateboarding? (Please answer yes or no)").toLowerCase();

if (questionTwo === 'yes' || questionTwo === "y") {
  alert("Correct " + userName + "! I once broke both bones in my left arm at the same time!");
} else if (questionTwo === 'no' || questionTwo === "n") {
  alert("Wrong! I don't skate as much anymore but I still love to ride around.");
} else {
  alert("That was not a valid response " + userNamer + ". You still get it wrong!");
}

var questionThree = prompt("Do I own lots of board games? (Please answer yes or no)").toLowerCase();

if (questionThree=== 'yes' || questionThree === "y") {
  alert("Yes! I own many board games. My favorite one is Arkham Horror! We should play sometime " + userName + ".");
} else if (questionThree === 'no' || questionThree === "n") {
  alert("Wrong" + userName + "! I have a whole bookshelf full of them!");
} else {
  alert("That was not a valid response. You still get it wrong" + userName + "!");
}

var questionFour = prompt("Have I ever met a celebrity? (Please answer yes or no)").toLowerCase();

if (questionFour=== 'yes' || questionFour === "y") {
  alert("Great work " + userName + "! I once met Prince on a plane!");
} else if (questionThree === 'no' || questionThree === "n") {
  alert("Incorrect " + userName+ ". You will have to get it right to see who it was!");
} else {
  alert("That was not a valid response. You still get it wrong!");
}

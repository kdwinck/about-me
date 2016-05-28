var userName = prompt("Identify yourself user?"); // This will get the users name

var questionOne = function() {
  var answerOne = prompt("Was I born in North Dakota? (Please answer yes or no)").toLowerCase();
  if (answerOne === 'no' || answerOne === "n") {
    alert("Good Job " + userName + "! You're off to a good start.");
  } else if (answerOne === 'yes' || answerOne === "y") {
    alert("You're wrong " + userName + "! I was born in South Dakota.");
  } else {
    alert("Please input a valid response. (y)es or (n)o");
    questionOne();
  }
};

var questionTwo = function() {
  var answerTwo = prompt("Is one of my favorite pastimes skateboarding? (Please answer yes or no)").toLowerCase();
  if (answerTwo === 'yes' || answerTwo === "y") {
    alert("Correct " + userName + "! I once broke both bones in my left arm at the same time!");
  } else if (answerTwo === 'no' || answerTwo === "n") {
    alert("Wrong! I don't skate as much anymore but I still love to ride around.");
  } else {
    alert("Please input a valid response. (y)es or (n)o");
    questionTwo();
  }
};

var questionThree = function() {
  var answerThree = prompt("Do I own lots of board games? (Please answer yes or no)").toLowerCase();
  if (answerThree=== 'yes' || answerThree === "y") {
    alert("Yes! I own many board games. My favorite one is Arkham Horror! We should play sometime " + userName + ".");
  } else if (answerThree === 'no' || answerThree === "n") {
    alert("Wrong " + userName + "! I have a whole bookshelf full of them!");
  } else {
    alert("Please input a valid response. (y)es or (n)o");
    questionThree();
  }
};

var questionFour = function() {
  var answerFour = prompt("Have I ever met a celebrity? (Please answer yes or no)").toLowerCase();
  if (answerFour=== 'yes' || answerFour === "y") {
    alert("Great work " + userName + "! I once met Prince on a plane!");
  } else if (answerFour === 'no' || answerFour === "n") {
    alert("Incorrect " + userName+ ". You will have to get it right to see who it was!");
  } else {
    alert("Please input a valid response. (y)es or (n)o");
    questionFour();
  }
};

var main = function() {
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
};

main();

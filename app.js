var userName = prompt("Identify yourself user."); // This will get the users name
var score = 0;

var questions = [
                  'Was I born in North Dakota?',
                  'Is one of my favorite pastimes skateboarding?',
                  'Do I own a lot of board games?',
                  'Have I ever met a celebrity?'
                ];

var answers = ['no', 'yes', 'yes', 'yes'];

var responses = [
                  ['Good Job ' + userName + '! You\'re off to a good start.', 'You\'re wrong ' + userName + '! I was born in South Dakota.'],
                  ['Correct ' + userName + '! I once broke both bones in my left arm at the same time!', 'Wrong! I don\'t skate as much anymore but I still love to ride around.'],
                  ['Yes! I own many board games. My favorite one is Arkham Horror! We should play sometime ' + userName + '.', 'Wrong ' + userName + '! I have a whole bookshelf full of them!'],
                  ['Great work ' + userName + '! I once met Prince on a plane!', 'Incorrect ' + userName+ '. You will have to get it right to see who it was!']
                ];

for (var i = 0; i < questions.length; i++) {
  var answer = prompt(questions[i]).toLowerCase();
  if (answer === answers[i] || answer === answers[i].charAt(0)) {
    alert(responses[i][0]);
    score ++;
  } else {
    alert(responses[i][1]);
  }
}

// previously had 4 functions similar to the following -- replaced by loop above

// var questionOne = function() {
//   var answerOne = prompt("Was I born in North Dakota? (Please answer yes or no)").toLowerCase();
//   if (answerOne === 'no' || answerOne === "n") {
//     alert("Good Job " + userName + "! You're off to a good start.");
//     score ++;
//   } else if (answerOne === 'yes' || answerOne === "y") {
//     alert("You're wrong " + userName + "! I was born in South Dakota.");
//   } else {
//     alert("Please input a valid response. (y)es or (n)o");
//     questionOne();
//   }
// };

var questionFive = function() {
  var guesses = 4;
  while (guesses > 0) {
    var answerFive = parseInt(prompt("What is my favorite number?"));
    if (answerFive > 17) {
      alert("Your guess was too high.");
      guesses --;
    } else if (answerFive < 17) {
      alert("Your guess is too low.");
      guesses --;
    } else if (answerFive === 17) {
      alert("Correct!");
      guesses = 0;
      score ++;
    }
  }
};

var questionSix = function() {
  answers = ["lost in translation", "tron", "steve jobs"];
  var guesses = 6;
  while (guesses > 0) {
    var answerSix = prompt("What is one of my favorite movies?").toLowerCase();
    if (answers.indexOf(answerSix) !== -1) {
      alert("Wow " + userName + "! Great Job");
      guesses = 0;
      score ++;
    } else {
      alert("Try again!");
      guesses --;
    }
  }
};

var displayScore = function() {
  alert("Your score was " + score + " out of 6. How did you do " + userName + "?");
  var el = document.getElementById('display-score');
  el.textContent = 'Score: ' + score;
};

var main = function() {
  questionFive();
  questionSix();
  displayScore();
};

main();

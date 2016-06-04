var userName;    //declare variable for userName
var score = 0;   // define starting user score

function getUserName() {
  userName = prompt('Identify yourself user.');
}

function askYesNoQuestions() {

  var questions = [                   // declare yes/no questions
    'Was I born in North Dakota?',
    'Is one of my favorite pastimes skateboarding?',
    'Do I own a lot of board games?',
    'Have I ever met a celebrity?'
  ];

  var answers = ['no', 'yes', 'yes', 'yes'];   // declare yes/no answers

  // declare responses if right or wrong
  var responses = [
                    ['Good Job ' + userName + '! You\'re off to a good start.', 'You\'re wrong ' + userName + '! I was born in South Dakota.'],
                    ['Correct ' + userName + '! I once broke both bones in my left arm at the same time!', 'Wrong! I don\'t skate as much anymore but I still love to ride around.'],
                    ['Yes! I own many board games. My favorite one is Arkham Horror! We should play sometime ' + userName + '.', 'Wrong ' + userName + '! I have a whole bookshelf full of them!'],
                    ['Great work ' + userName + '! I once met Prince on a plane!', 'Incorrect ' + userName + '. You will have to get it right to see who it was!']
  ];

  // loop through questions, check answer, alert with appropriate response
  for (value in questions) {
    var answer = prompt(questions[value]).toLowerCase();
    if (answer === answers[value] || answer === answers[value].charAt(0)) {
      alert(responses[value][0]);
      score ++;
    } else {
      alert(responses[value][1]);
    }
  }
};

function questionFive() {
  var guesses = 4;  // declare number of guesses
  while (guesses > 0) {
    var answerFive = parseInt(prompt('What is my favorite number?'));  // convert answer to an integer
    if (answerFive > 17) {
      alert('Your guess was too high.');
      guesses --;
    } else if (answerFive < 17) {
      alert('Your guess is too low.');
      guesses --;
    } else if (answerFive === 17) {
      alert('Correct!');
      guesses = 0;
      score ++;
    }
  }
};

function questionSix() {
  movies = ['lost in translation', 'tron', 'steve jobs'];
  var guesses = 6;
  while (guesses > 0) {
    var answerSix = prompt('What is one of my favorite movies?').toLowerCase();
    if (movies.indexOf(answerSix) !== -1) {
      alert('Wow ' + userName + '! Great Job');
      guesses = 0;  // after correct answer set break loop by setting guesses to 0
      score ++;
    } else {
      alert('Try again!');
      guesses --;  // subtract from number of guesses remaining
    }
  }
  var allAnswers = '';
  // list all posible answers
  for (value in movies) {
    allAnswers += movies[value] + ', ';
  }
  alert('The options were ' + allAnswers);
};

function displayScore() {
  alert('Your score was ' + score + ' out of 6. How did you do ' + userName + '?');
  var el = document.getElementById('display-score');
  el.textContent = 'Score: ' + score;  // update element to display score on page
};

function bonusPicture() {
  if (score === 6) {
    var el = document.getElementById('bonus');
    el.className = 'show';
  }
}

function main() {
  getUserName();
  askYesNoQuestions();
  questionFive();
  questionSix();
  displayScore();
  bonusPicture();
};

main();

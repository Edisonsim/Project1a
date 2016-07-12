$( document ).ready(function() {
    console.log( "ready!" );

  var player1Score = 0;
  var player2Score = 0;

  var resetButton = document.getElementById("reset");
  var currQuestion;

  var questions = [{
    question: "Popeye’s nephews were called Peepeye, Poopeye, Pipeye and Pupeye.",
    choices: ["true", "false"],
    answer: 0,
  }, {
    question: "The ‘black box’ in an aeroplane is black.",
    choices: ["true", "false"],
    fullAnswer: "It is orange",
    answer: 1,
  }, {
    question: "Seoul is the capital of North Korea.",
    choices: ["true", "false"],
    fullAnswer: "it is the capital of South Korea",
    answer: 1,
  }, {
    question: "Lightning never strikes in the same place twice",
    choices: ["true", "false"],
    fullAnswer: "It strikes in the same place quite a lot.",
    answer: 1,
  }, {
    question: "Birds are dinosaurs?",
    choices: ["true", "false"],
    fullAnswer: "Not all dinosaurs became extinct; some of them survived, and every bird alive today.",
    anwser: 0,
  }, {
    question: "Coffee originated in Brazil.",
    choices: ["true", "false"],
    fullAnswer: "Coffee likely originated in Ethiopia around the 15th century.",
    answer: 1,
  }, {
    question: "The world’s oldest person to begin primary school was 84 year old?",
    choices: ["true", "false"],
    fullAnswer: "Kimani Ng ang a Maruge from Kenya",
    answer: 0,
  }, {
    question: "Brazil is the biggest producer of cocoa beans.",
    choices: ["true", "false"],
    fullAnswer: "The Ivory Coast is the biggest producer of cocoa beans",
    answer: 1,
  }, {
    question: "Fortune cookies are not Chinese.",
    choices: ["true", "false"],
    fullAnswer: "they were invented early 1900s in San Franisco",
    answer: 0,
  }, {
    question: "Honey can last for at least 1000 years",
    choices: ["true", "false"],
    fullAnswer: "Honey doesn't rot",
    answer: 0,
  }];


  // function randomQuestion (question, answers) {
  //   document.getElementsByClassName("questions")
  //   this.question = question;
  //   this.choices = answers;
  // }

  function displayQuestion() {
    currQuestion = questions[currentQuestion()];
    $(".question").html("<h2>" + currQuestion.question + "</h2>");

  }

  displayQuestion();


  //numberOfQuestions()
  //It should return an integer that is the number of questions in a game
  function currentQuestion() {
    return Math.floor((Math.random() * 10));
  }

  //It should return an integer that is the zero-based index of the current question in the quiz
  //correctAnswer()

  //It should return an integer that is the zero-based index the correct answer for the currrent question
  function numberOfQuestions() {
    return 11;
    // return quiz.questions.length;
  }

  //It should return an integer that is the number of choices for the current question
  //playTurn(choice)

  function playerTurn(event) {
    var box = event.target;
    var statusMsg = document.getElementById("status-msg");
    //click on box it will switch between player1 or player 2
    if (box.innerHTML === "" && currentPlayer === "") {
      currentPlayer = "";
      statusMsg.innerHTML = "Player 1's turn now.";
      checkWinner();

    } else if (box.innerHTML === "" && currentPlayer === "") {
      this.innerHTML =
        currentPlayer = "";
      statusMsg.innerHTML = "Player 2's turn now.";
      checkWinner();
    }
  }
  //It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
  //isGameOver()

  //It should return a true or false if the quiz is over.
  //whoWon()

  //It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.

  function restart() {
    var resetButton = document.getElementById("reset");
    resetButton.addEventListener('click', function() {
      location.reload();
    });

    //It should restart the game so it can be played again.
    //Assumptions

    //It is assumed that the turns of the player will be automatically changed after each turn.
  }

});// end of jquery doc ready

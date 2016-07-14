$(document).ready(function() {
  console.log("ready!");

  var questions = [{
    question: "Popeye’s nephews were called Peepeye, Poopeye, Pipeye and Pupeye.",
    answer: "true",
  }, {
    question: "The ‘black box’ in an aeroplane is black.",
    answer: "false",
  }, {
    question: "Seoul is the capital of North Korea.",
    answer: "false",
  }, {
    question: "Lightning never strikes in the same place twice",
    answer: "true",
  }, {
    question: "Birds are dinosaurs?",
    answer: "true",
  }, {
    question: "Coffee originated in Brazil.",
    answer: "false",
  }, {
    question: "The world’s oldest person to begin primary school was 84 year old?",
    answer: "true",
  }, {
    question: "Brazil is the biggest producer of cocoa beans.",
    answer: "true",
  }, {
    question: "Fortune cookies are not Chinese.",
    answer: "false",
  }, {
    question: "Honey can last for at least 1000 years",
    answer: "true",
  }];

  var player1Score = 0;
  var player2Score = 0;
  var selectedChoice = 0;
  var awswerQuestion = 1;
  var player = 1;
  var totalAskedQ = 0;
  var currQnIndex;


//============= button on click ===================//
  $("#start").click(function() {
    displayQuestion();
    $("#start").hide();
  })
  $(".answer").click(function() {

    incScore(this.id);


    //scoreBoard go up each time player 1
    nextPlayer();

});


  function currentQuestion() {
    var random = Math.floor(Math.random() * questions.length);
    currQnIndex = questions[random];

    return currQnIndex;

  }
  function displayQuestion() {
    currentQuestion()
    $(".question").html("<h2>" + currQnIndex.question + "</h2>");
      totalAskedQ++;
  }
//change displayQuestion each time it switch player
  function nextPlayer() {
    if (player === 2) {
      player = 1;
      displayQuestion();
      checkWinner();
    } else {
      player = 2;
      displayQuestion();
      checkWinner();
    }
  }

  //Increase curr player score
  function incScore(selectedAns) {

    if (selectedAns === currQnIndex.answer) {
      if (player === 1) {
        player1Score++;
        $('#player1').text("Player 1 Score : " + player1Score);
      } else {
        player2Score++;
        $('#player2').text("Player 2 Score : " + player2Score);
      }
    }
  }
//check playerScore point for winner
  function checkWinner() {
      if (totalAskedQ === 10) {
        if (player1Score > player2Score) {
          alert("Player 1 wins! Play again?");
          location.reload();
        } else if (player2Score > player1Score) {
          alert("Player 2 wins! Play again?");
          location.reload();
        } else {
          alert("It's a draw!");
          location.reload();
        }
      };
  }

  $("#reset").click(function() {
    location.reload();
  });

});
// end of jquery doc ready

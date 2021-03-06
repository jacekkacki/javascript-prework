{
  let playerWinCounter = 0;
  let computerWinCounter = 0;

  const playGame = function(playerInput) {
    clearMessages();

    const getMoveName = function(argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else if (argMoveId == 4) {
        return "wyczyść";
      } else {
        printMessage("Coś poszło nie tak ?");
      }
    };

    //losowanie komputera
    const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
    console.log("Komputer wylosował " + computerMove);

    //ruch gracza
    const playerMove = getMoveName(playerInput);
    console.log("Gracz wybrał: " + playerMove);

    //wynik gry
    const displayResult = function(argComputerMove, argPlayerMove) {
      argComputerMove = computerMove;
      argPlayerMove = playerMove;
      printMessage("Ruch komputera to: " + argComputerMove);
      printMessage("Twój ruch to: " + argPlayerMove);

      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
        playerWinCounter = playerWinCounter + 1;
      } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
        printMessage("Jest remis, gramy dalej ?");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
        printMessage("Wygrał komputer");
        computerWinCounter = computerWinCounter + 1;
      }

      if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
        printMessage("Wygrał komputer");
        computerWinCounter = computerWinCounter + 1;
      } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
        playerWinCounter = playerWinCounter + 1;
      } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
        printMessage("Jest remis, gramy dalej ?");
      }

      if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
        printMessage("Jest remis, gramy dalej ?");
      } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
        printMessage("Wygrał komputer");
        computerWinCounter = computerWinCounter + 1;
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
        playerWinCounter = playerWinCounter + 1;
      }
      printMessage("Wynik rozgrywki Ty:Computer");
      printMessage(playerWinCounter + ":" + computerWinCounter);
      if (argPlayerMove == "wyczyść") {
        clearMessages();
        playerWinCounter = 0;
        computerWinCounter = 0;
      }
    };
    displayResult(computerMove, playerMove);
    if (playerWinCounter == 3 && computerWinCounter < 3) {
      printMessage("Jesteś MISTRZEM !");
    } else if (computerWinCounter == 3 && playerWinCounter < 3) {
      printMessage("Komputer jest MISTRZEM !");
    }
  };

  document.getElementById("play-rock").addEventListener("click", function() {
    playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function() {
    playGame(2);
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function() {
      playGame(3);
    });
  document.getElementById("play-clear").addEventListener("click", function() {
    playGame(4);
  });
}

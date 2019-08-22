function playGame(playerInput){

  clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
      return 'papier';
    } else if (argMoveId == 3){
      return 'nożyce';
    } else {
      return 'Inny numer';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  /* if(randomNumber == 1){
    computerMove = 'kamień';
  } else if (randomNumber == 2) {
    computerMove = 'papier';
  } else if (randomNumber == 3) {
    computerMove = 'nożyce';
  } */
  //ruch gracza
  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  console.log('playerMove: ' +playerMove);

  /*if(playerInput == '1'){
    playerMove = 'kamień';
  } else if (playerInput == 2) {
    playerMove = 'papier';
  }  else if (playerInput == 3) {
    playerMove = 'nożyce';
  }
    else {
      playerMove = 'Inny numer';
    } */

  //wynik gry
  function displayResult(argComputerMove, argPlayerMove){
      argComputerMove = computerMove;
      argPlayerMove = playerMove;
      printMessage('Ruch komputera to: ' + argComputerMove);
      printMessage('Twój ruch to: ' + argPlayerMove);

      console.log('moves:'+ argComputerMove,  argPlayerMove);

      if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Jest remis, gramy dalej ...');
      } else if (argComputerMove == "nożyce" && argPlayerMove == 'papier'){
        printMessage('Wygrał komputer');
      }

      if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Wygrał komputer');
      }  else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Jest remis, gramy dalej ...');
      }

      if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Jest remis, gramy dalej ...');
      }  else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Wygrał komputer');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      }

      if( argComputerMove == 'kamień' && argPlayerMove == 'Inny numer'){
        printMessage('Wybrałeś inny numer niż 1, 2, 3');
      }  else if (argComputerMove == 'papier' && argPlayerMove == 'Inny numer'){
        printMessage('Wybrałeś inny numer niż 1, 2, 3');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'Inny numer'){
        printMessage('Wybrałeś inny numer niż 1, 2, 3');
      }
  }

  displayResult(computerMove, playerMove);

  console.log('Gracz wpisał: ' + playerInput);
  console.log('PlayerMove: ' + playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

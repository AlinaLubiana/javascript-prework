function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == '2'){
        return 'papier';
    }
      if(argMoveId == '3'){
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

function displayResult(argComputerMove, argPlayerMove){ 
    
    console.log('moves:', argComputerMove, argPlayerMove);
    
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if( argComputerMove ==  argPlayerMove ){
        printMessage('Mamy ramis!'); 
        return;
    }

    if( (argComputerMove == 'kamień' && argPlayerMove == 'papier')||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce')||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ){
      printMessage('Ty wygrywasz!'); 
    }

    else {
      printMessage('Tym razem przegrywasz :(');
    }
  }
  


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
    computerMove = 'kamień';
}
if(randomNumber == 2){
    computerMove = 'papier';
}
if(randomNumber == 3){
    computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);
*/


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);



/*
if(playerInput == '1'){
    playerMove = 'kamień';
}
if(playerInput == '2'){
    playerMove = 'papier';
}
  if(playerInput == '3'){
    playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);
*/

displayResult(computerMove, playerMove);


/*
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}
if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrawasz!');
}
if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Mamy ramis!');
}

if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrawasz!'); 
}
if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}
if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Mamy ramis!'); 
}

if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Mamy ramis!'); 
}
if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrawasz!'); 
}
if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!'); 
}

if( computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch'); 
}
if( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch'); 
}
if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch'); 
}
*/
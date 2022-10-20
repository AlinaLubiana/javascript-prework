function playGame(playerInput){

    clearMessages('messages');
    clearMessages('result');


    function getMoveName(argMoveId){
        if(argMoveId == '1'){
        return 'kamień';
        }
        if(argMoveId == '2'){
            return 'papier';
        }
        if(argMoveId == '3'){
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.', 'messages');
        return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove){ 
        
        console.log('moves:', argComputerMove, argPlayerMove);
        
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove, 'messages');
        if( argComputerMove ==  argPlayerMove ){
            printMessage('Mamy ramis!', 'messages'); 
            return;
        }

        if( (argComputerMove == 'kamień' && argPlayerMove == 'papier')||
            (argComputerMove == 'papier' && argPlayerMove == 'nożyce')||
            (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
        ){
        printMessage('Ty wygrywasz!', 'messages');
        scorePlayer = scorePlayer + 1;
        
        }

        else {
        printMessage('Tym razem przegrywasz :(', 'messages');
        scoreComputer = scoreComputer + 1;
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
    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    /*let playerMove = getMoveName(playerInput);*/
  
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
    printMessage('wynik ' + scorePlayer + ' - ' + scoreComputer, 'result');

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

}

let playRockBtn = document.getElementById('playRock');
let playPaperBtn = document.getElementById('playPaper');
let playScissorsBtn = document.getElementById('playScissors');

let clearScreenBtn = document.getElementById('clearScreen');

playRockBtn.addEventListener('click', function() {playGame(1)});  //https://stackoverflow.com/questions/35667267/addeventlistenerclick-firing-immediately
playPaperBtn.addEventListener('click', function() {playGame(2)});  
playScissorsBtn.addEventListener('click', function() {playGame(3)});  

clearScreenBtn.addEventListener('click', function() {
    scorePlayer = 0;
    scoreComputer = 0;  
    clearMessages('messages');
    clearMessages('result');
}); 

let scorePlayer = 0;
let scoreComputer = 0;





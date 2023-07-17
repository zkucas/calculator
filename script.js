function getComputerChoice(){
    const choice = ['ROCK', 'PAPER', 'SCISSOR'];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

let playerchoice = prompt("Please Enter Rock, Paper or Scissor").toUpperCase();

function playGame(a,b){

    let playerWinCount = 0;
    let computerWinCount = 0;

    if (a == b){
        console.log("Play Again");
    }else if( b == 'ROCK' && a ==  "PAPER"){
        console.log("You win! Rock beats " + a)
        playerWinCount=1;
    }else if ( b == 'PAPER' && a == "SCISSOR"){
        console.log("You lose! " + a + " beats " + b )
        computerWinCount=1;  
    }else if ( b == 'SCISSOR' && a == "PAPER"){
        console.log("You win! SCISSOR beats " + a)
        playerWinCount=1;
    }
    else if (b == 'SCISSOR' && a == "ROCK" ){
        console.log("You lose! " + a + " beats " + b )
    }else{
        console.log("You picked " + b +" and computer picked " + a)
    }
    return playerWinCount
}

let winCount = 0;

for (i=0; i<5; i++)
{
    winCount += playGame(getComputerChoice(), playerchoice);
}


console.log(playGame(getComputerChoice(), playerchoice))
console.log("You won " + winCount + " games out ouf 5")
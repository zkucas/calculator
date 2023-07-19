let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(getComputerChoice(), button.textContent.toUpperCase())
    })
})


function getComputerChoice(){
    const choice = ['ROCK', 'PAPER', 'SCISSOR'];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

/*let playerchoice = prompt("Please Enter Rock, Paper or Scissor").toUpperCase();*/

let playerWinCount = 0;
let computerWinCount = 0;
let div = document.querySelector('#display')

function playGame(a,b){

    if (a == b){
        console.log("Play Again");
    }else if( b == 'ROCK' && a ==  "PAPER"){
        console.log("You win! Rock beats " + a)
        playerWinCount+=1;
    }else if ( b == 'PAPER' && a == "SCISSOR"){
        console.log("You lose! " + a + " beats " + b )
        computerWinCount+=1;  
    }else if ( b == 'SCISSOR' && a == "PAPER"){
        console.log("You win! SCISSOR beats " + a)
        playerWinCount+=1;
    }
    else if (b == 'SCISSOR' && a == "ROCK" ){
        console.log("You lose! " + a + " beats " + b )
    }else{        
        div.textContent = "You picked " + b +" and computer picked " + a;
    }
    return playerWinCount
}

console.log(playerWinCount)

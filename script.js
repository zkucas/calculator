let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(getComputerChoice(), button.textContent.toUpperCase().trim())
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
let div2 = document.querySelector('#result')

function playGame(a,b){

    if (a == b){
        div.textContent = "Play Again!";
    }else if( b == 'ROCK' && a ==  "PAPER"){
        div.textContent = "You win! Rock beats " + a;
        playerWinCount+=1;
    }else if ( b == 'PAPER' && a == "SCISSOR"){
        div.textContent = "You lose! " + a + " beats " + b;
        computerWinCount+=1;  
    }else if ( b == 'SCISSOR' && a == "PAPER"){
        div.textContent = "You win! SCISSOR beats " + a;
        playerWinCount+=1;
    }
    else if (b == 'SCISSOR' && a == "ROCK" ){
        div.textContent = "You lose! " + a + " beats " + b;
        computerWinCount+=1; 
    }else if (b == 'ROCK' && a ==  "SCISSOR"){
        div.textContent = "You win! Rock beats " + a;
        playerWinCount+=1;     
    }else{        
        div.textContent = "You picked " + b +" and computer picked " + a;
    }

    div2.textContent = "Your result: " + playerWinCount + " Computer result: " + computerWinCount;

    if ((playerWinCount) > 4){
        div2.textContent = "You won the game!"
        playerWinCount = 0;
    }else if( computerWinCount > 4){
        div2.textContent = "You lose the game!"
        computerWinCount = 0;
    }

    return [playerWinCount,computerWinCount]
}



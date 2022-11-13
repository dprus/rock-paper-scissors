const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const yourEmojiDiv = document.querySelector(".your-emoji");
const computerEmojiDiv = document.querySelector(".computer-emoji");
const yourPointsSpan = document.querySelector(".your-points");
const computerPointsSpan = document.querySelector(".computer-points");
const newGame = document.querySelector(".new-game-btn");
const whoWonText = document.querySelector(".who-won-text");


let yourPoints = 0;
let yourEmoji = '❔';
let compPoints = 0;
let compEmoji = '❔';
let playerSelection = "";

function startGame() {
    //punkty na start
    yourPointsSpan.textContent = yourPoints;
    computerPointsSpan.textContent = compPoints;
    //emotki na start
    yourEmojiDiv.textContent = yourEmoji;
    computerEmojiDiv.textContent = compEmoji;
    whoWonText.textContent = 'Start the game by choosing paper, rock or scissors.';

}

window.onload = startGame();

//runda
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        yourPoints = yourPoints + 1;
        yourPointsSpan.textContent = yourPoints;
        console.log(yourPoints);
        whoWonText.textContent = 'You win!';
        game(yourPoints, compPoints);
        return yourPoints;


    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        compPoints = compPoints + 1;
        computerPointsSpan.textContent = compPoints;
        console.log(compPoints);
        whoWonText.textContent = 'You lose.';
        game(yourPoints, compPoints);
        return compPoints;

    } else if (computerSelection === playerSelection) {
        whoWonText.textContent = 'Tie.';
    }
}



function getComputerChoice() {
    let randomNumer = Math.floor(Math.random() * 3);

    if (randomNumer === 0) {
        computerEmojiDiv.textContent = '👊🏻';
        const computerSelection = 'rock';
        return computerSelection;

    } else if (randomNumer === 1) {
        computerEmojiDiv.textContent = '✋🏻';
        const computerSelection = 'paper';
        return computerSelection;

    } else {
        computerEmojiDiv.textContent = '✌🏻';
        const computerSelection = 'scissors';
        return computerSelection;

    }

}



//rock paper scissors buttons
rock.addEventListener('click', () => {
    yourEmojiDiv.textContent = '👊🏻';
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
})

paper.addEventListener('click', () => {
    yourEmojiDiv.textContent = '✋🏻';
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
})

scissors.addEventListener('click', () => {
    yourEmojiDiv.textContent = '✌🏻';
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
})



//new game button
newGame.addEventListener('click', function () {
    yourPoints = 0;
    compPoints = 0;
    yourPointsSpan.textContent = yourPoints;
    computerPointsSpan.textContent = compPoints;
    yourEmojiDiv.textContent = '❔';
    computerEmojiDiv.textContent = '❔';
    whoWonText.textContent = 'Start the game by choosing paper, rock or scissors.';
    document.querySelector(".flex-container-two").style.display = "flex";
    document.querySelector(".choose-text").style.display = "block";
    document.querySelector(".your-points").style.color = "rgb(226, 221, 190)";
    document.querySelector(".computer-points").style.color = "rgb(226, 221, 190)";
    document.querySelector(".score-header-computer").style.opacity = "1";
    document.querySelector(".score-emoji-computer").style.opacity = "1";
    document.querySelector(".computer-emoji").style.opacity = "1";
    document.querySelector(".score-header-you").style.opacity = "1";
    document.querySelector(".score-emoji-you").style.opacity = "1";
    document.querySelector(".your-emoji").style.opacity = "1";

});


function game(yourPoints, compPoints) {
    if (yourPoints === 5 || compPoints === 5) {
        if (yourPoints > compPoints) {
            whoWonText.textContent = `You won the game! (${yourPoints} vs. ${compPoints})`;
            document.querySelector(".score-header-computer").style.opacity = "0.5";
            document.querySelector(".your-points").style.color = "green";
            document.querySelector(".computer-points").style.color = "red";
            document.querySelector(".score-emoji-computer").style.opacity = "0.5";
            document.querySelector(".computer-emoji").style.opacity = "0.5";
            document.querySelector(".flex-container-two").style.display = "none";
            document.querySelector(".choose-text").style.display = "none";
        } else if (compPoints > yourPoints) {
            whoWonText.textContent = `You lost the game. (${compPoints} vs. ${yourPoints})`;
            document.querySelector(".score-header-you").style.opacity = "0.5";
            document.querySelector(".computer-points").style.color = "green";
            document.querySelector(".your-points").style.color = "red";
            document.querySelector(".score-emoji-you").style.opacity = "0.5";
            document.querySelector(".your-emoji").style.opacity = "0.5";
            document.querySelector(".flex-container-two").style.display = "none";
            document.querySelector(".choose-text").style.display = "none";
        }
    }
}    
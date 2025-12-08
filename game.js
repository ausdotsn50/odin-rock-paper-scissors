const rounds = 5;
const container = document.querySelector("#container");

// Section for header
const headerContainer = document.createElement("div");
headerContainer.classList.add("header"); // Class addition to header elements

const title = document.createElement("h1");
title.textContent = "Rock, Paper, Scissors";

const subTitle = document.createElement("h2");
subTitle.textContent = "Best of " + rounds;

headerContainer.appendChild(title);
headerContainer.appendChild(subTitle);

// Section for button picks
const pickContainer = document.createElement("div");
pickContainer.classList.add("pick");

const pickPara = document.createElement("p");
pickPara.textContent = "PICK YOUR MOVE!";
pickPara.id = "pick-id"

pickContainer.appendChild(pickPara);

const choicesContainer = document.createElement("div");
choicesContainer.id = "choices-id";
const choices = ["Rock", "Paper", "Scissor"];
const createButtons = () => { 
    for (ch of choices) { 
        const button = document.createElement("button");
        button.textContent = ch;
        choicesContainer.appendChild(button);
    }
}
createButtons();
pickContainer.appendChild(choicesContainer);

// Tally container
const tallyContainer = document.createElement("div");
tallyContainer.classList.add("tally");

const tallyLeft = document.createElement("div");
tallyLeft.classList.add("left");

const tallyRight = document.createElement("div");
tallyRight.classList.add("right");

const human = document.createElement("p"); 
human.textContent = "Player's pick: ";
const computer = document.createElement("p"); 
computer.textContent = "Computer's pick: ";

// Appending human and computer scores left of Tally container
tallyLeft.appendChild(human);
tallyLeft.appendChild(computer);

tallyContainer.appendChild(tallyLeft);
tallyContainer.appendChild(tallyRight);

const tempVerdict = document.createElement("p");
tempVerdict.textContent = "You Win! Paper beats Rock";

tallyRight.appendChild(tempVerdict);

// Div sections
container.appendChild(headerContainer);
container.appendChild(pickContainer);
container.appendChild(tallyContainer);

/*
// Global var
let humanScore = 0;
let computerScore = 0;

const computerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    // console.log(choice);
    return choice === 0 ? "rock" : choice === 1 ? "paper" : choice === 2 ? "scissor" : undefined;
}

const getHumanChoice = () => { 
    const response = prompt("rock, paper, or scissor?");
    return response !== null ? response.toLowerCase() : "";
}

const pickWinner = (human, comp) => human>comp ? "Human wins!" : comp>human? "Computer wins!" : "It's a tie!";

// Play a round
function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("Tie");
    } else if ( humanChoice === "rock" && computerChoice == "paper" || 
                humanChoice === "paper" && computerChoice === "scissor" ||
                humanChoice === "scissor" && computerChoice === "rock") {
                    
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    } else {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }

    console.log("Score Tally\nHuman: " + humanScore + "\nComputer: " + computerScore);
}

function playGame() {
    let hc, cc;
    for(let i=0; i <5; i++) {
        hc = getHumanChoice(); cc = computerChoice();
        console.log("Human: ", hc);
        console.log("Computer: ", cc);
        playRound(hc, cc)
    }
    console.log(pickWinner(humanScore, computerScore));
}

playGame();

// console.log(["rock", "paper", "scissors"].length)
// Play 5 rounds of Rock, Paper, Scissor
*/
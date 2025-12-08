let humanScore = 0;
let computerScore = 0;

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

// result container
const resultContainer = document.createElement("div");
resultContainer.classList.add("result");

const resultLeft = document.createElement("div");
resultLeft.classList.add("left");

const resultRight = document.createElement("div");
resultRight.classList.add("right");

const human = document.createElement("p"); 
human.textContent = "Player's pick: ";
const humanSpan = document.createElement("span");
human.appendChild(humanSpan);

const computer = document.createElement("p"); 
computer.textContent = "Computer's pick: ";
const compSpan = document.createElement("span");
computer.appendChild(compSpan);

// Appending human and computer scores left of result container
resultLeft.appendChild(human);
resultLeft.appendChild(computer);

resultContainer.appendChild(resultLeft);
resultContainer.appendChild(resultRight);

const tempVerdict = document.createElement("p");
tempVerdict.textContent = " ";
resultRight.appendChild(tempVerdict);

// Div sections
container.appendChild(headerContainer);
container.appendChild(pickContainer);
container.appendChild(resultContainer);

/* Functionalities section */
const buttons = choicesContainer.children;


for(let i = 0; i < buttons.length; i++) {
    let b = buttons[i];
    b.addEventListener('click', (event) => {
        event.preventDefault();
        playRound(b.textContent, computerChoice());
    });
}

const computerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    return choice === 0 ? "rock" : choice === 1 ? "paper" : choice === 2 ? "scissor" : undefined;
}

/*
const getHumanChoice = () => { 
    const response = prompt("rock, paper, or scissor?");
    return response !== null ? response.toLowerCase() : "";
}
*/

function playRound(humanChoice, computerChoice) {
    let lower = humanChoice.toLowerCase();
    humanSpan.textContent = humanChoice;

    let capital = computerChoice; capital = capital.charAt(0).toUpperCase() + capital.slice(1);
    compSpan.textContent = capital;    
    if(lower === computerChoice) {
        tempVerdict.textContent = "Draw! You both chose " + capital;
    } else if ( lower === "rock" && computerChoice == "paper" || 
                lower === "paper" && computerChoice === "scissor" ||
                lower === "scissor" && computerChoice === "rock") {
                    
        tempVerdict.textContent = "You lose! " + capital + " beats " + humanChoice;
        computerScore++;
    } else {
        tempVerdict.textContent = "You Win! " + humanChoice + " beats " + capital;
        humanScore++;
    }

    console.log("Score result\nHuman: " + humanScore + "\nComputer: " + computerScore);
}


/*
const pickWinner = (human, comp) => human>comp ? "Human wins!" : comp>human? "Computer wins!" : "It's a tie!";

// Play a round

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
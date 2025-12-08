// Global vars
const rounds = 5;
let humanScore = 0, computerScore = 0, round = 1;
let pickContainer = null, resultContainer = null, tallyContainer = null;

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
container.appendChild(headerContainer);

// Add new game opt here
newGameOpt();

function initGame() {
    if(pickContainer !== null || resultContainer !== null || tallyContainer !== null) {
        humanScore = 0, computerScore = 0, round = 1;
        pickContainer.remove();
        resultContainer.remove();
        tallyContainer.remove();
    }
    
}

function newGameOpt() {
    const newGameDiv = document.createElement("div");
    const newGame = document.createElement("button");
    newGame.id = "newG-btn";
    newGameDiv.id = "newG-id";
    newGame.textContent = "New Game";

    // Show the game console on New Game and remove the button element
    newGame.addEventListener('click', (event) => {
        event.preventDefault();
        newGameDiv.remove();
        newGame.remove();

        //initGame();
        playGame();
    })

    newGameDiv.appendChild(newGame);
    container.appendChild(newGameDiv);
}

function playGame() {
    initGame();
    // Section for button picks
    pickContainer = document.createElement("div");
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
    container.appendChild(pickContainer);

    resultContainer = document.createElement("div");
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

    tallyContainer = document.createElement("div");
    tallyContainer.classList.add("tally");

    const roundTxt = document.createElement("p");
    roundTxt.id = "round-id";
    roundTxt.textContent = "Round " + round;

    tallyContainer.appendChild(roundTxt);
    
    // Div sections
    container.appendChild(resultContainer);
    container.appendChild(tallyContainer);

    /* Functionalities section */
    const buttons = choicesContainer.children;

    for(let i = 0; i < buttons.length; i++) {
        let b = buttons[i];
        b.addEventListener('click', (event) => {
            event.preventDefault();
            if(round !== rounds+1) {
                playRound(b.textContent, computerChoice());
            }
            round++;
        });
    }
    
    if(round === rounds+1) {
        newGameOpt();
    }
    
    const computerChoice = () => {
        let choice = Math.floor(Math.random() * 3);
        return choice === 0 ? "rock" : choice === 1 ? "paper" : choice === 2 ? "scissor" : undefined;
    }

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

    round += 1;
}
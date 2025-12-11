// Global vars
const rounds = 5;
let humanScore = 0, computerScore = 0, round = 1;
let pickContainer = null, resultContainer = null, tallyContainer = null;

const body = document.querySelector("body");
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

const footerContainer = document.createElement("div");
footerContainer.classList.add("footer");
const footer1 = document.createElement("p");
footer1.innerHTML = "<strong>ausdotsn50</strong>";
const footer2 = document.createElement("a");
footer2.innerHTML = '<a href="https://github.com/ausdotsn50/odin-landing-page" target="__blank"><img id="footer-icon" src="https://raw.githubusercontent.com/ausdotsn50/odin-recipes/main/images/github.svg" alt="github-icon"></a>';
const footer3 = document.createElement("p");
footer3.innerHTML = "<strong>2025</strong>";
footerContainer.appendChild(footer1);
footerContainer.appendChild(footer2);
footerContainer.appendChild(footer3);
body.appendChild(footerContainer);


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
    human.textContent = "Player's pick: "
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
    resultRight.appendChild(tempVerdict);

    tallyContainer = document.createElement("div");
    tallyContainer.classList.add("tally");

    const roundTxt = document.createElement("p");
    roundTxt.id = "round-id";
    roundTxt.textContent = "---";

    const scoreDiv = document.createElement("div");
    scoreDiv.classList.add("score");
    const pScore = document.createElement("p");
    pScore.textContent = "Player's Score: " + humanScore;
    const cScore = document.createElement("p");
    cScore.textContent = "Computer's Score: " + computerScore;

    scoreDiv.appendChild(pScore);
    scoreDiv.appendChild(cScore);

    tallyContainer.appendChild(roundTxt);
    tallyContainer.appendChild(scoreDiv);
    
    // Div sections
    container.appendChild(resultContainer);
    container.appendChild(tallyContainer);

    /* Functionalities section */
    const buttons = choicesContainer.children;

    for(let i = 0; i < buttons.length; i++) {
        let b = buttons[i];
        b.addEventListener('click', (event) => {
            event.preventDefault();
            if(round < rounds){
                playRound(b.textContent, computerChoice());
                roundTxt.textContent = "Round " + round;
                round++;
            } else if(round === rounds) {
                roundTxt.textContent = "Round " + round;
                round++;

                newGameOpt();

                // logic for...
                const finalVerdict = document.createElement("p");
                finalVerdict.textContent = pickWinner(humanScore, computerScore);
                finalVerdict.style.textAlign = "center";
                tallyContainer.appendChild(finalVerdict);
            }
        });
    }
    
    // newGameOpt();
    const computerChoice = () => {
        let choice = Math.floor(Math.random() * 3);
        return choice === 0 ? "rock" : choice === 1 ? "paper" : choice === 2 ? "scissor" : undefined;
    }

    const pickWinner = (human, comp) => human>comp ? "Player wins!" : comp>human? "Computer wins!" : "It's a tie!";

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
            cScore.textContent = "Computer's Score: " + computerScore;
        } else {
            tempVerdict.textContent = "You Win! " + humanChoice + " beats " + capital;
            humanScore++;
            pScore.textContent = "Player's Score: " + humanScore;
        }

        console.log("Score result\nHuman: " + humanScore + "\nComputer: " + computerScore);
    }
}
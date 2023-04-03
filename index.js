// Player RPS Selection - Button functionality
rock = document.querySelector(".rock");

rock.addEventListener("click", () => {
    playRound("rock");
})

paper = document.querySelector(".paper");

paper.addEventListener("click", (e) => {
    playRound("paper");
})

scissors = document.querySelector(".scissors");

scissors.addEventListener("click", () => {
    playRound("scissors");
})

// Computer RPS random selection
function computerChoice() {
    let computer = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * computer.length);
    return computer[random].toLowerCase();
}    

// Score object
let score = {
    playerScore: 0,
    computerScore: 0,
    tie: 0
}

// Visual score tracker
function scoreCount() {
    let playerScore = document.querySelector(".score_info");
    playerScore.textContent = `Player: ${score.playerScore} | 
    Computer: ${score.computerScore} | Tied: ${score.tie}`;
}

// Function to declare winner after 5 rounds
function winner() {
    const winner = document.querySelectorAll(".winner_player, .winner_computer, .tie")
    document.querySelector(".score_info");
    scoreCount.textContent = `Player ${score.playerScore}`;
    if (score.playerScore > score.computerScore) {
        return winner[0].textContent = "You win the game!";
    } else if (score.playerScore < score.computerScore) {
        return winner[1].textContent = "Computer wins the game!";
    } else {
        return winner[2].textContent = "It's a tie!";
    }
}

// Main game logic
function game(player, computer) {
    if (player === computer) {
        score.tie += 1;
    } else {
        if (player === "rock" && computer === "scissors") {
            console.log("Player wins!");
            score.playerScore += 1;
        } else {
            if (player === "rock" && computer === "paper") {
                console.log("Computer Wins!");
                score.computerScore += 1;
            } else {
                if (player === "paper" && computer === "rock") {
                    console.log("Player Wins!");
                    score.playerScore += 1;
                } else {
                    if (player === "paper" && computer === "scissors") {
                        console.log("Computer Wins!");
                        score.computerScore += 1;
                    } else {
                        if (player === "scissors" && computer === "paper") {
                            console.log("Players Wins!");
                            score.playerScore += 1;
                        } else {
                            if (player === "scissors" && computer === "rock") {
                                console.log("Computer Wins!")
                                score.computerScore += 1;
                            } else {
                                console.log("Error - Must enter a valid choice!");
                            }
                        }
                    }
                }
            }
        }
    }
}



// Round count and game info tracking function
let roundCount = 0;

function playRound(player) {
    if (roundCount >= 5) {
        return;
    }

    const computer = computerChoice();
    
    game(player, computer);
    roundCount++;
    scoreCount();

    // To be replaced
    const choices = document.querySelectorAll(".choices");
    choices.forEach(element => {
        element.textContent = `You chose: ${player} | Computer chose: ${computer}`;
    });

    // To be finished
    // console.log(`Round ${roundCount}:`);
    // console.log(`Player: ${player}`);
    // console.log(`Computer: ${computer}`);
    // console.log(`Player Score: ${score.playerScore}`);
    // console.log(`Computer Score: ${score.computerScore}`);

    // Stop game after 5 rounds are played
    if (roundCount === 5) {
        return winner();
    }
};


// Reset game visual trackers & stored data
const resetGame = document.querySelector(".reset_game");
resetGame.addEventListener("click", () => {
    reset();
});


function reset() {
    // Reset the state of the function to its original values
    score.playerScore = 0;
    score.computerScore = 0;
    score.tie = 0;
    roundCount = 0;
    scoreCount();
    const winner = document.querySelectorAll(".winner_player, .winner_computer, .tie, .playerScore");
    winner.forEach(element => {
        element.textContent = "";
        const choices = document.querySelectorAll(".choices");
    choices.forEach(element => {
        element.textContent = "";
    });
    });
}

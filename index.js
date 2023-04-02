rock = document.querySelector(".rock");

rock.addEventListener("click", () => {
    playRound("rock");
})

paper = document.querySelector(".paper");

paper.addEventListener("click", () => {
    paper = "paper";
    computer = computerChoice();
    game(paper, computer);
    console.log();
})

scissors = document.querySelector(".scissors");

scissors.addEventListener("click", () => {
    scissors = "scissors";
    computer = computerChoice();
    game(scissors, computer);
    console.log();
})



function computerChoice() {
    let computer = ["Rock", "Paper", "scissors"];
    let random = Math.floor(Math.random() * computer.length);
    return computer[random].toLowerCase();
}



let score = {
    playerScore: 0,
    computerScore: 0
}

function winner() {
    if (score.playerScore > score.computerScore) {
        return console.log("Player wins the game!");
    } else if (score.playerScore < score.computerScore) {
        return console.log("Computer wins the game!");
    } else {
        return console.log("It's a tie!");
    }
}

function game(player, computer) {
    if (player === computer) {
        console.log("Tie");
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




let roundCount = 0;

function playRound(player) {
    const computer = computerChoice();
    game(player, computer);
    roundCount++;
    
    console.log(`Round ${roundCount}:`);
    console.log(`Player: ${player}`);
    console.log(`Computer: ${computer}`);
    console.log(`Player Score: ${score.playerScore}`);
    console.log(`Computer Score: ${score.computerScore}`);

    if(roundCount === 5) {
        winner();
    } 
};


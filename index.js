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
    if(score.playerScore > score.computerScore) {
        return console.log("Player wins the game!");
    } else if(score.playerScore < score.computerScore) {
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

let rounds = [];

for(let i = 1; i <= 5; i++) {
    computer = computerChoice();
    player = prompt("Select One: Rock, Paper, Scissors").toLowerCase();
    console.log(game(player, computer));
    console.log(`Round ${i}:`);
    console.log(`Player: ${player}`);
    console.log(`Computer: ${computer}`);
    console.log(`Player Score: ${score.playerScore}`);
    console.log(`Computer Score: ${score.computerScore}`);
    let result = i;
    rounds.push(result);
}

if (rounds.length === 5) {
    winner();
}



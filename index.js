function computerChoice() {
    let computer = ["Rock", "Paper", "scissors"];
    let random = Math.floor(Math.random() * computer.length);
    return computer[random].toLowerCase();
}

let computer = computerChoice();
let player = prompt("Select One: Rock, Paper, Scissors").toLowerCase();

function round(player, computer) {
    if (player === computer) {
        return console.log("Tie");
    } else {
        if (player === "rock" && computer === "scissors") {
            return console.log("Player wins!");
        } else {
            if (player === "rock" && computer === "paper") {
                return console.log("Computer Wins!");
            } else {
                if (player === "paper" && computer === "rock") {
                    return console.log("Player Wins!");
                } else {
                    if (player === "paper" && computer === "scissors") {
                        return console.log("Computer Wins!");
                    } else {
                        if (player === "scissors" && computer === "paper") {
                            return console.log("Players Wins!");
                        } else {
                            if (player === "scissors" && computer === "rock") {
                                return console.log("Computer Wins!")
                            } else {
                                return console.log("Error - Must enter a valid choice!");
                            }
                        }
                    }
                }
            }
        }
    }
}


console.log(player, computer);
console.log(game(player, computer));





let input_value = document.getElementById("player-name");
let player_choice = document.getElementById("player-choice");
let computer_choice = document.getElementById("computer-choice");
let winner = document.getElementById("winner");

let total_wins = document.getElementById("total-wins");
let total_losses = document.getElementById("total-losses");
let total_ties = document.getElementById("total-ties");


function RockPaperScissor(player_move) {
    const computer_move = computerMove();
    let result = " ";
    let player_name = " ";

    if (input_value.value != "") {
        player_name = input_value.value;
    } else {
        player_name = "UNDEFINED";
    }

    if (player_move === "sax") {
        if (computer_move === "sax") {
            result = "Det var oavgjort!";
            score.ties += 1;
        }
        else if (computer_move === "påse") {
            result = `${player_name} Vann!`;
            score.wins += 1;
        }
        else if (computer_move === "sten") {
            result = "Datorn Vann!";
            score.losses += 1;
        }
    }

    if (player_move === "påse") {
        if (computer_move === "sax") {
            result = "Maskinnen Vann!";
            score.losses += 1;
        }
        else if (computer_move === "påse") {
            result = "Det var oavgjort!";
            score.ties += 1;
        }
        else if (computer_move === "sten") {
            result = `${player_name} Vann!`;
            score.wins += 1;
        }
    }

    if (player_move === "sten") {
        if (computer_move === "sax") {
            result = `${player_name} Vann!`;
            score.wins += 1;
        }
        else if (computer_move === "påse") {
            result = "Maskinnen Vann!";
            score.losses += 1;
        }
        else if (computer_move === "sten") {
            result = "Det var oavgjort!";
            score.ties += 1;
        }
    }

    
    player_choice.innerHTML = player_move.toUpperCase();
    computer_choice.innerHTML = computer_move.toUpperCase();
    winner.innerHTML = result.toUpperCase();

    total_wins.innerHTML = score.wins;
    total_losses.innerHTML = score.losses;
    total_ties.innerHTML = score.ties;
}

function computerMove() {
    const random_numer = Math.random();
    let computer_move = " ";

    if (random_numer >= 0 && random_numer < 1/3) {
        computer_move = "sten";
    }

    else if (random_numer >= 1/3 && random_numer < 2/3) {
        computer_move = "sax";
    }

    else if (random_numer >= 2/3 && random_numer < 1) {
        computer_move = "påse";
    }

    return computer_move;
}

function resetGame() {
    input_value.value = "";
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    total_wins.innerHTML = score.wins;
    total_losses.innerHTML = score.losses;
    total_ties.innerHTML = score.ties;
    player_choice.innerHTML = "--------";
    computer_choice.innerHTML = "--------";
    winner.innerHTML = "?";
}

// score object
let score = {
    wins: 0,
    losses: 0,
    ties: 0
  };





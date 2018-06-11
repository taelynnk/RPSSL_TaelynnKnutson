var Rochambeau = {
    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    spockButton: document.getElementById("spock"),
    lizardButton: document.getElementById("lizard"),

    score: {
        wins: 0,
        losses: 0,
        ties: 0,
    },
    choices: {
        Rock: 0,
        Paper: 1,
        Scissors: 2,
        Spock: 3,
        Lizard: 4,
    },
    results: {
        wins: 1,
        ties: 0,
        losses: -1,
    },
    player: new Player(),
    computer: new Player(),

    storePlayerChoice: function (choice) {
        Rochambeau.player.choices = choices;
        console.log("My choice is " + Rochambeau.player.choices);
        Rochambeau.storeComputerChoice();
    },
    storeComputerChoice: function () {
        Rochambeau.computer.choice = Math.floor(Math.random() * 3);
    },
    playTheGame: function playGame() {
    if (Rochambeau.player.choices != null) {
        if (Rochambeau.player.choices == Rochambeau.computer.choices) {
            ++Rochambeau.score.ties;
            Rochambeau.displayGameResult("tie");
            Rochambeau.updateMatches();
        } else if ( Rochambeau.player.choices == Rochambeau.player.choices.Rock && (Rochambeau.computer.choices == Rochambeau.computer.choices.Scissors || Rochambeau.computer.choices == Rochambeau.computer.choices.Lizard)) {
            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win");
            Rochambeau.updateMatches();
        } else if (Rochambeau.player.choices == Rochambeau.player.choices.Paper && (Rochambeau.computer.choices == Rochambeau.computer.choices.Rock || Rochambeau.computer.choices == Rochambeau.computer.choices.Spock)) {
            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win");
            Rochambeau.updateMatches();
        } else if (Rochambeau.player.choices == Rochambeau.player.choices.Scissors && (Rochambeau.computer.choices == Rochambeau.computer.choices.Paper || Rochambeau.computer.choices == Rochambeau.computer.choices.Lizard)) {
            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win");
            Rochambeau.updateMatches();
        } else if (Rochambeau.player.choices == Rochambeau.player.choices.Spock && (Rochambeau.computer.choices == Rochambeau.computer.choices.Scissors || Rochambeau.computer.choices == Rochambeau.computer.choices.Rock)) {
            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win");
            Rochambeau.updateMatches();
        } else if (Rochambeau.player.choices == Rochambeau.player.choices.Lizard && (computerChoice == 3 || computerChoice == 1)) {
            updateScore(0);
            displayGameResult("win");
            updateMatches();
        } else {
            updateScore(2);
            displayGameResult("lose");
            updateMatches();
        }
    }
    playerChoice = null;
}





}








function displayGameResult(result) {
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    if (result === "win") {
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }
    updateScoreBoard();
}

function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}

function updateScoreBoard() {
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1];
}




rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
spockButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(4)
});

playButton.addEventListener('click', () => {
    playGame()
});

var matches = [0, 0];

function updateMatchBoard() {
    document.getElementById("matchWins").textContent = matches[0];
    document.getElementById("matchLosses").textContent = matches[1];
}

function updateMatches() {
    if (score[0] == 2) {
        ++matches[0];
        score[0] = 0;
        score[1] = 0;
        score[2] = 0;
        updateMatchBoard();
    } else if (score[2] == 2) {
        ++matches[1];
        score[0] = 0;
        score[1] = 0;
        score[2] = 0;
        updateMatchBoard();
    }
}

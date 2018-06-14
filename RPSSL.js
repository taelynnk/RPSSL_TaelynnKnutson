function Player() {
    this.choice = null;
}
var Rochambeau = {
    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    spockButton: document.getElementById("spock"),
    lizardButton: document.getElementById("lizard"),
    playButton: document.getElementById("play"),
    matchScore: {
        wins: 0,
        losses: 0,
    },
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
    choiceNames: {
        0: "ROCK",
        1: "PAPER",
        2: "SCISSORS",
        3: "SPOCK",
        4: "LIZARD",
    },
    results: {
        wins: 1,
        ties: 0,
        losses: -1,
    },
    player: new Player(),
    computer: new Player(),

    storePlayerChoice: function (choice) {
        Rochambeau.player.choice = choice;
        console.log("My choice is " + Rochambeau.player.choice);
        Rochambeau.storeComputerChoice();
    },
    storeComputerChoice: function () {
        Rochambeau.computer.choice = Math.floor(Math.random() * 5);
        console.log("The computer choice is " + Rochambeau.computer.choice);
    },
    playTheGame: function () {
        if (Rochambeau.player.choice != null) {
            if (Rochambeau.player.choice == Rochambeau.computer.choice) {
                ++Rochambeau.score.ties;
                Rochambeau.displayGameResult("tie");
                Rochambeau.updateScoreBoard();
                console.log("tie");

            } else if (Rochambeau.player.choice == Rochambeau.choices.Rock && (Rochambeau.computer.choice == Rochambeau.choices.Scissors || Rochambeau.computer.choice == Rochambeau.choices.Lizard)) {
                ++Rochambeau.score.wins;
                Rochambeau.displayGameResult("win");
                Rochambeau.updateScoreBoard();
                console.log("win");
            } else if (Rochambeau.player.choice == Rochambeau.choices.Paper && (Rochambeau.computer.choice == Rochambeau.choices.Rock || Rochambeau.computer.choice == Rochambeau.choices.Spock)) {
                ++Rochambeau.score.wins;
                Rochambeau.displayGameResult("win");
                Rochambeau.updateScoreBoard();
                console.log("win");
            } else if (Rochambeau.player.choice == Rochambeau.choices.Scissors && (Rochambeau.computer.choice == Rochambeau.choices.Paper || Rochambeau.computer.choice == Rochambeau.choices.Lizard)) {
                ++Rochambeau.score.wins;
                Rochambeau.displayGameResult("win");
                Rochambeau.updateScoreBoard();
                console.log("win");
            } else if (Rochambeau.player.choice == Rochambeau.choices.Spock && (Rochambeau.computer.choice == Rochambeau.choices.Scissors || Rochambeau.computer.choice == Rochambeau.choices.Rock)) {
                ++Rochambeau.score.wins;
                Rochambeau.displayGameResult("win");
                Rochambeau.updateScoreBoard();
                console.log("win");
            } else if (Rochambeau.player.choice == Rochambeau.choices.Lizard && (Rochambeau.computer.choice == Rochambeau.choices.Spock || Rochambeau.computer.choice == Rochambeau.choices.Paper)) {
                ++Rochambeau.score.wins;
                Rochambeau.displayGameResult("win");
                Rochambeau.updateScoreBoard();
                console.log("win");
            } else {
                ++Rochambeau.score.losses;
                Rochambeau.displayGameResult("lose");
                Rochambeau.updateScoreBoard();
                console.log("lose");
            }
        }
        Rochambeau.player.choice = null;
    },

    displayGameResult: function (result) {
        var message = "Your choice was " + Rochambeau.choiceNames[Rochambeau.player.choice] + " and the computer's choice was " + Rochambeau.choiceNames[Rochambeau.computer.choice] + ".";
        if (result == "win") {
            document.getElementById("result").textContent = message + " YOU WIN!";
            document.getElementById("result").className = "alert alert-success";
        } else if (result == "lose") {
            document.getElementById("result").textContent = message + " YOU LOSE!";
            document.getElementById("result").className = "alert alert-danger";
        } else {
            document.getElementById("result").textContent = message + " A tie.";
            document.getElementById("result").className = "alert alert-info";
        }
        Rochambeau.updateScoreBoard();
    },
    updateScoreBoard: function () {
        document.getElementById("wins").textContent = Rochambeau.score.wins;
        document.getElementById("losses").textContent = Rochambeau.score.losses;
        document.getElementById("ties").textContent = Rochambeau.score.ties;
        document.getElementById("matchWins").textContent = Rochambeau.matchScore.wins;
        document.getElementById("matchLosses").textContent = Rochambeau.matchScore.losses;
    },
    updateMatches: function () {
        if (Rochambeau.score.wins == 2) {
            ++Rochambeau.matchScore.wins;
            Rochambeau.score.wins = 0;
            Rochambeau.score.ties = 0;
            Rochambeau.score.losses = 0;
            Rochambeau.updateScoreBoard();
        } else if (Rochambeau.score.losses == 2) {
            ++Rochambeau.matchScore.losses;
            Rochambeau.score.wins = 0;
            Rochambeau.score.ties = 0;
            Rochambeau.score.losses = 0;
            Rochambeau.updateScoreBoard();
        }
    },




}









Rochambeau.rockButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(0);
});
Rochambeau.paperButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(1);
});
Rochambeau.scissorsButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(2);
});
Rochambeau.spockButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(3);
});
Rochambeau.lizardButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(4);
});

Rochambeau.playButton.addEventListener('click', () => {
    Rochambeau.playTheGame();
    Rochambeau.storeComputerChoice();
    Rochambeau.updateScoreBoard();
});

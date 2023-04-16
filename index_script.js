let cScore = 0;
let pScore = 0;

const resultContainer = document.querySelector('#resultContainer');

const scoreMeter = document.createElement('div');
scoreMeter.className = 'scoreMeter';
resultContainer.appendChild(scoreMeter);

const roundResult = document.createElement('div');
roundResult.className = 'roundResult';
resultContainer.appendChild(roundResult);

const finalResult = document.createElement('div');
finalResult.className = 'finalResult';
resultContainer.appendChild(finalResult);

function getComputerChoice() {
    var x = Math.floor(Math.random() * 10);
    x %= 3;

    const cases = ["ROCK", "PAPER", "SCISSORS"];
    return cases[x];
}

function overCondition(playerWon) {
    if (playerWon)
        pScore++;
    else
        cScore++;

    scoreMeter.textContent = `Player Score: ${pScore}
                                Computer Score: ${cScore}`;

    console.log('pScore: ' + pScore);
    console.log('cScore: ' + cScore);

    if (pScore >= 5) {
        finalResult.textContent = "Player Won the Game";
    }
    else if (cScore >= 5) {
        finalResult.textContent = "Player Lost the Game";
    }
    else
        return;
    
    pScore = 0;
    cScore = 0;
}

function playRound(event) {
    let pSelect = this.className.toUpperCase();
    let cSelect = getComputerChoice();

    console.log("pSelect: " + pSelect);
    console.log("cSelect: " + cSelect);

    var res = "You ";

    if (cSelect === 'ROCK') {
        if (pSelect === 'ROCK')
            res = res + "Tied";
        else if (pSelect === 'PAPER') {
            res = res + "Win, Paper beats Rock";
            overCondition(true);
        }
        else if (pSelect === 'SCISSORS') {
            res = res + "Lose, Rock beats Scissors";
            overCondition(false);
        }
    }
    else if (cSelect === 'PAPER') {
        if (pSelect === 'ROCK') {
            res = res + "Lose, Paper beats Rock";
            overCondition(false);
        }
        else if (pSelect === 'PAPER')
            res = res + "Tied";
        else if (pSelect === 'SCISSORS') {
            res = res + "Win, Scissors beats Paper";
            overCondition(true);
        }
    }
    else if (cSelect === 'SCISSORS') {
        if (pSelect === 'ROCK') {
            res = res + "Win, Rock beats Scissors";
            overCondition(true);
        }
        else if (pSelect === 'PAPER') {
            res = res + "Lose, Scissors beats Paper";
            overCondition(false);
        }
        else if (pSelect === 'SCISSORS')
            res = res + "Tied";
    }

    roundResult.textContent = res;
}

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', playRound);
});
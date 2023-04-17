let cScore = 0;
let pScore = 0;

const resultContainer = document.querySelector('#resultContainer');

const scoreMeter = document.createElement('div');
scoreMeter.className = 'scoreMeter';
scoreMeter.textContent = `PScore: ${pScore} |
                            CScore: ${cScore}`;
resultContainer.appendChild(scoreMeter);

const roundResult = document.createElement('div');
roundResult.className = 'roundResult';
roundResult.textContent = '-';
resultContainer.appendChild(roundResult);

const finalResult = document.createElement('div');
finalResult.className = 'finalResult';
finalResult.textContent = '-';
resultContainer.appendChild(finalResult);

function getComputerChoice() {
    var x = Math.floor(Math.random() * 10);
    x %= 3;

    const cases = ["ROCK", "PAPER", "SCISSORS"];
    return cases[x];
}

function overCondition(playerWon, ComputerWon, pChoice, cChoice) {
    var res = "You ";

    if(pScore >= 5 || cScore >= 5) {
        pScore = 0;
        cScore = 0;
        finalResult.textContent = '-';
        roundResult.textContent = '-';
    }

    if (playerWon) {
        pScore++;
        res = res + `Win, ${pChoice} beats ${cChoice}`;
    }
    else if(ComputerWon) {
        cScore++;
        res = res + `Lose, ${cChoice} beats ${pChoice}`;
    }
    else {
        res = res + "Tied";
    }

    roundResult.textContent = res;
    scoreMeter.textContent = `PScore: ${pScore} |
                                CScore: ${cScore}`;

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
}

function playRound(event) {
    let pSelect = this.className.toUpperCase();
    let cSelect = getComputerChoice();

    console.log("pSelect: " + pSelect);
    console.log("cSelect: " + cSelect);

    if ((pSelect === 'ROCK' && cSelect === 'SCISSORS') ||
        (pSelect === 'PAPER' && cSelect === 'ROCK') ||
        (pSelect === 'SCISSORS' && cSelect === 'PAPER')) {

        overCondition(true, false, pSelect, cSelect);
    }
    else if ((pSelect === 'ROCK' && cSelect === 'PAPER') ||
        (pSelect === 'PAPER' && cSelect === 'SCISSORS') ||
        (pSelect === 'SCISSORS' && cSelect === 'ROCK')) {

        overCondition(false, true, pSelect, cSelect);
    }
    else {
        overCondition(false, false);
    }
}

const rock = document.querySelector('.pContainer .rock');
rock.addEventListener('click', playRound);

const paper = document.querySelector('.pContainer .paper');
paper.addEventListener('click', playRound);

const scissors = document.querySelector('.pContainer .scissors');
scissors.addEventListener('click', playRound);
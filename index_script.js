const cases = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    var x = Math.floor(Math.random() * 10);
    x %= 3;

    return cases[x];
}

function playRound(pSelect, cSelect) {
    pSelect = pSelect.toUpperCase();
    cSelect = cSelect.toUpperCase();
    
    var res = "You ";

    if(cSelect === 'ROCK')
    {
        if(pSelect === 'ROCK')
            res = res + "Tied";
        else if(pSelect === 'PAPER')
            res = res + "Win, Paper beats Rock";
        else if(pSelect === 'SCISSORS')
            res = res + "Lose, Rock beats Scissors";
    }
    else if(cSelect === 'PAPER')
    {
        if(pSelect === 'ROCK')
            res = res + "Lose, Paper beats Rock";
        else if(pSelect === 'PAPER')
            res = res + "Tied";
        else if(pSelect === 'SCISSORS')
            res = res + "Win, Scissors beats Paper";
    }
    else if(cSelect === 'SCISSORS')
    {
        if(pSelect === 'ROCK')
            res = res + "Win, Rock beats Scissors";
        else if(pSelect === 'PAPER')
            res = res + "Lose, Scissors beats Paper";
        else if(pSelect === 'SCISSORS')
            res = res + "Tied";
    }

    return res;
}

function game(count) {
    for (var i = 0; i < count; i++) {
        const pSelect = prompt();
        const cSelect = getComputerChoice();

        console.log(playRound(pSelect, cSelect));
    }
}

game(5);
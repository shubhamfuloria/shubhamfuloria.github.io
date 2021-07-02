var score = [0, 0];
function computerPlay() {

        let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {

                case 0: return 'rock';
                        break;
                case 1: return 'paper';
                        break;
                case 2: return 'scissor';
                        break;
        }
}

document.querySelector('#rock').addEventListener('click', function () {

        let computerSel = computerPlay();
        updateScore(computerSel, 'rock');
        updateUI(computerSel, 'rock');
});

document.querySelector('#paper').addEventListener('click', function () {

        let computerSel = computerPlay();
        updateScore(computerSel, 'paper');
        updateUI(computerSel, 'paper');

});

document.querySelector('#scissor').addEventListener('click', function () {

        let computerSel = computerPlay();
        updateScore(computerSel, 'scissor');
        updateUI(computerSel, 'scissor');
});


function updateUI(compSelection, playerSelection) {
        //Bot UI
        if (compSelection == 'rock')
                document.querySelector('.computer-move').src = 'img/rock.png';
        else if (compSelection == 'paper')
                document.querySelector('.computer-move').src = 'img/paper.png';
        else if (compSelection == 'scissor')
                document.querySelector('.computer-move').src = 'img/scissors.png';

        //player UI

        if (playerSelection == 'rock')
                document.querySelector('.player-move').src = 'img/rock.png';
        else if (playerSelection == 'paper')
                document.querySelector('.player-move').src = 'img/paper.png';
        else if (playerSelection == 'scissor')
                document.querySelector('.player-move').src = 'img/scissors.png';

        //scoreUI

        document.querySelector('.player-score').innerText = score[0];

        document.querySelector('.bot-score').innerText = score[1];

        //result UI

        if (score[0] == 5 || score[1] == 5) {

                document.querySelector('.result').style.display = 'flex';

                if (score[0] > score[1]) {
                        document.querySelector('.result-line').innerText = 'Congratulations You Won The Game :)'
                       
                }
                else {
                        document.querySelector('.result-line').innerText = 'Oops ! You lost the game :( '
                }
        }
}

function updateScore(compSelection, playerSelection) {


        if (compSelection == playerSelection) {

        }

        else if (compSelection == 'rock' && playerSelection == 'paper') {
                score[0]++;
        }

        else if (compSelection == 'rock' && playerSelection == 'scissor') {
                score[1]++;
        }

        else if (compSelection == 'paper' && playerSelection == 'rock') {
                score[1]++;
        }

        else if (compSelection == 'paper' && playerSelection == 'scissor') {
                score[0]++;
        }

        else if (compSelection == 'scissor' && playerSelection == 'rock') {
                score[0]++;
        }

        else if (compSelection == 'scissor' && playerSelection == 'paper') {
                score[1]++;
        }
}

document.querySelector('.new').addEventListener('click', function(){

        score = [0, 0];
        document.querySelector('.result').style.display = 'none';
        updateUI();
})
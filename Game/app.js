import { getComputerChoice, determineWinner } from './game.js';
import { updateResult, updateScore, disableButtons } from './dom.js';

console.log('rock, paper, scissors')

const gameForm = document.getElementById('game-form');
const scoreBoard = document.querySelector('#score-board');
const winsElement = document.getElementById('wins');
const lossesElement = document.getElementById('losses');
const tiesElement = document.getElementById('ties');

let roundCount = 0;
const maxRounds = 3;

gameForm.addEventListener('submit', (event) => {
    const playerChoiceInput = document.querySelector('input[name="choice"]:checked');

    if (!playerChoiceInput) {
        alert('Please select either Rock, Paper, or Scissors.');
        return;
    }

    const playerChoice = playerChoiceInput.value;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    updateResult(result);
    updateScore(result);

    if (roundCount < maxRounds) {
        roundCount++;
    }

    if (roundCount >= maxRounds) {
        //Determine the score based on best of 3.
        const wins = parseInt(winsElement.textContent);
        const losses = parseInt(lossesElement.textContent);
        if (wins > losses) {
            updateResult('You won best of 3!');
        } else if (losses > wins) {
            updateResult('You lost best of 3!');
        } else {
            updateResult("It'a a tie!");
        }
        disableButtons();
    }
});
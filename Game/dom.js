export function updateResult(result) {
    const resultSection = document.getElementById('result')
    resultSection.textContent = result;
    if (result === 'You Win') {
        resultSection.style.color = 'green';
        resultSection.innerHTML = `<h2>Congrats, You Won!</h2><img src="https://media0.giphy.com/media/uRAhwxlVBP6ied6EgB/giphy.gif?cid=6c09b9528ta6gwv0w3asahszz3ur4kuh8k8c8ik0c4jsn1gw&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g">`;
    } else if (result === 'You Lose') {
        resultSection.style.color = 'red'
        resultSection.innerHTML = `<h2>Sorry, You Lost. Play again!</h2><img src="https://media.baamboozle.com/uploads/images/142775/1633674782_2028546_url.gif">`;
    }
}

export function updateScore(result) {
    const winsElement = document.getElementById('wins');
const lossesElement = document.getElementById('losses');
const tiesElement = document.getElementById('ties');
    if (result === 'You Win!') {
        winsElement.textContent = parseInt(winsElement.textContent) + 1;
    } else if (result === 'You Lose!') {
        lossesElement.textContent = parseInt(lossesElement.textContent) + 1;
    } else {
        tiesElement.textContent = parseInt(tiesElement.textContent) + 1;
    }
}

export function disableButtons() {
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

    rockButton.setAttribute('disabled', true);
    paperButton.setAttribute('disabled', true);
    scissorsButton.setAttribute('disabled', true);
}
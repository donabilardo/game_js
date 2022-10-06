let game = document.querySelector('.game'),
    res = document.querySelector('.res'),
    newGameButton = document.querySelector('.new-game'),
    fields = document.querySelectorAll('.field'),
    step = false,
    circle = `<svg class="circle"><circle r="45" cx="58" cy="58" stroke="blue" stroke-width="10" fill="none" stroke-linecap="round" /></svg>`,
    cross = `<svg class="cross"><line class="first" x1="15" y1="15" x2="100" y2="100" stroke="red" stroke-width="10" stroke-linecap="round" /><line class="second" x1="100" y1="15" x2="15" y2="100" stroke="red" stroke-width="10" stroke-linecap="round" /></svg>`;

function stepCross(target) {
    target.innerHTML = cross;
    target.classList.add('x');
    let crossAudio = new Audio('tic-tac-toe/audio/cross.mp3');
    crossAudio.play();
}
function stepZero(target) {
    target.innerHTML = circle;
    target.classList.add('o');
    let circleAudio = new Audio('tic-tac-toe/audio/zero.mp3');
    circleAudio.play();
}
function init(event) {
    if (!step) stepCross(event.target)
    else stepZero(event.target);
    step = !step;
    win();
}
function newGame() {

}
function win() {
    let comb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


}

newGameButton.addEventListener('click', newGame);
game.addEventListener('click', init);
let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newBtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true;

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('button was clicked');
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add('hide');
}

const disableBoxes = () => {
    for( let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if(pos1Value != "" && pos2Value !="" && pos3Value !=""){
            if(pos1Value == pos2Value && pos2Value == pos3Value){
                console.log('winner', pos1Value);
                showWinner(pos1Value);
                
            }
        }
    }
};
 
newBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);

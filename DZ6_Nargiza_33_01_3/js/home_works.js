//lesson1
const gmail_input = document.querySelector('#gmail_input')
const gmail_button = document.querySelector('#gmail_button')
const gmail_result = document.querySelector('#gmail_result')

const regExp=/^[a-zA-Z0-9]*@gmail.com$/
gmail_input.addEventListener('click',()=>{
    if (regExp.test(gmail_input.value)) {
        gmail_result.innerHTML='ok'
        gmail_result.style.color='green'
    } else {
        gmail_result.innerHTML='not'
        gmail_result.style.color='red'
    }
})





let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let second = 0;
let intervalId = null;

startBtn.addEventListener('click', function () {
    if (intervalId === null) {
        intervalId = setInterval(stopWatch, 1000); // 1000 ms = 1 second
    }
});

stopBtn.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;
    second = 0;
    updateDisplay();
});

function stopWatch() {
    second++;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('seconds').innerHTML = formatTime(second);
}

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}



const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;
let direction = "right";

function moveBlock() {
    const parentBlockWidth = parentBlock.clientWidth;
    const parentBlockHeight = parentBlock.clientHeight;
    const childBlockWidth = childBlock.clientWidth;
    const childBlockHeight = childBlock.clientHeight;

    if (direction === "right" && positionX < parentBlockWidth - childBlockWidth) {
        positionX += 1;
        childBlock.style.left = `${positionX}px`;
    } else if (direction === "right" && positionX === parentBlockWidth - childBlockWidth) {
        positionY += 1;
        direction = "down";
    } else if (direction === "down" && positionY < parentBlockHeight - childBlockHeight) {
        positionY += 1;
        childBlock.style.top = `${positionY}px`;
    } else if (direction === "down" && positionY === parentBlockHeight - childBlockHeight) {
        positionX -= 1;
        direction = "left";
    } else if (direction === "left" && positionX > 0) {
        positionX -= 1;
        childBlock.style.left = `${positionX}px`;
    } else if (direction === "left" && positionX === 0) {
        positionY -= 1;
        direction = "up";
    } else if (direction === "up" && positionY > 0) {
        positionY -= 1;
        childBlock.style.top = `${positionY}px`;
    } else if (direction === "up" && positionY === 0) {
        positionX += 1;
        direction = "right";
    }

    requestAnimationFrame(moveBlock);
}

requestAnimationFrame(moveBlock);
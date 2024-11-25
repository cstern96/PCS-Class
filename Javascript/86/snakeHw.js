(function () {
    'use strict';

    const SNAKE_SIZE = 64;

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');

    const crashSound = new Audio('audio/crash.mp3');
    const eatSound = new Audio('audio/eatApple.mp3');

    function resizeCanvas() {
        theCanvas.width = window.innerWidth - (window.innerWidth % SNAKE_SIZE);
        theCanvas.height = window.innerHeight - (window.innerHeight % SNAKE_SIZE);
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();


    let direction = 'ArrowRight';


    let x = -SNAKE_SIZE;
    let y = 0;
    let a = getRandomInt(theCanvas.width / SNAKE_SIZE) * SNAKE_SIZE;
    let b = getRandomInt(theCanvas.height / SNAKE_SIZE) * SNAKE_SIZE;
    let points = 0;
    const snakeHead = document.createElement('img');
    snakeHead.src = 'images/snakeHead.png';
    const apple = document.createElement('img');
    apple.src = 'images/apple.png';
    let intervalId;
    snakeHead.onload = () => {               
        intervalId = setInterval(() => {
            console.log(direction);
            context.clearRect(0, 0, theCanvas.width, theCanvas.height);
            context.drawImage(apple, a, b);
            context.font = 'bold 48px Arial'; 
            context.fillText(`points: ${points}`, 64, 64);
            switch (direction) {
                case 'ArrowRight':
                    x += SNAKE_SIZE;
                    break;
                case 'ArrowLeft':
                    x -= SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    y -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    y += SNAKE_SIZE;
                    break;
            }
            if (x > theCanvas.width) {
                x = theCanvas.width - SNAKE_SIZE;
                crash();
            }
            if (x < 0) {
                x = 0;
                crashSound.play();
                crash();
            }
            if (y > theCanvas.height) {
                y = theCanvas.height - SNAKE_SIZE;
                crash();
            }
            if (y < 0) {
                y = 0;
                crash();
            }
            if(x === a && y === b){
                eatSound.play();
                a = getRandomInt(theCanvas.width / SNAKE_SIZE) * SNAKE_SIZE;
                b = getRandomInt(theCanvas.height / SNAKE_SIZE) * SNAKE_SIZE;
                points++;
            }

            context.drawImage(snakeHead, x, y);
        }, 500);
    };
    function crash() {
        crashSound.play();
        clearInterval(intervalId);
        context.font = '100px Arial';
        context.fillStyle = 'black';
        context.fillText('Game Over!', 50, 300);
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    document.addEventListener('keydown', e => {
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'ArrowDown':
                direction = e.key;
        }
    });
}());

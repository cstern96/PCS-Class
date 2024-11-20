/* global $*/
(function () {
    'use strict';
    let balls = [];

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');

    function resizeCanvas() {
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    class Ball {
        constructor(color, radius) {
            this.color = color;
            this.radius = radius;
            this.x = this.radius;
            this.y = this.radius;
            this.dx = 1;
            this.dy = 2.5;
        }
        drawAndMove() {

            context.beginPath();
            context.fillStyle = `${this.color}`;

            this.x += this.dx;
            this.y += this.dy;


            if (this.x >= theCanvas.width - this.radius || this.x <= this.radius) {
                this.dx = -this.dx;
            }

            if (this.y >= theCanvas.height - this.radius || this.y <= this.radius) {
                this.dy = -this.dy;
            }

            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.fill();
        }
    }
    function animate() {
        setInterval(() => {
            context.clearRect(0, 0, theCanvas.width, theCanvas.height);
            balls.forEach(ball => {
                ball.drawAndMove();
            });
        }, 10);
    }

    $('#ballForm').on('submit', e => {
        e.preventDefault();
        let ballColor = $('#color').val();
        let ballRadius = Number($('#radiusSize').val());
        const ball = new Ball(ballColor, ballRadius);
        balls.push(ball);
    });
    animate();
}());

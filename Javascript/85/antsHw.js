/* global $*/
(function () {
    'use strict';

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');

    function resizeCanvas() {
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    class Ant {
        constructor(color) {
            this.x = window.innerWidth / 2;
            this.y = window.innerHeight / 2;
            this.color = color;
            this.times = 0;
        }

        draw() {
            context.beginPath();
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, 2, 4);
            context.stroke();
        }

        move() {
            if (this.times === 0) {
                this.direction = Ant.getDirection();
                this.times = Ant.getRandomNumber(1, 10);
            }
            if (this.direction === 'x') {
                this.x += Ant.getRandomNumber(-1, 1);
            }
            else {
                this.y += Ant.getRandomNumber(-1, 1);
            }
            this.times--;     

            if (this.x >= theCanvas.width) {
                this.x = theCanvas.width;
            }
            if (this.y >= theCanvas.height) {
                this.y = theCanvas.height;
            }


            this.draw();
        }


        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * ((max - min) + 1)) + min;
        }
        static getDirection() {
            let rnd = this.getRandomNumber(1, 2);
            if (rnd === 1) {
                return 'x';
            }
            else {
                return 'y';
            }
        }
    }

    //const ant = new Ant();
    //ant.draw();

    const ants = [];
    function addAnts(number, color) {
        for (let i = 0; i < number; i++) {
            ants.push(new Ant(color));
        }
    }

    function animate() {
        setInterval(() => {
            context.clearRect(0, 0, theCanvas.width, theCanvas.height);
            ants.forEach(ant => ant.move());
        }, 100);
    }

    $('#antForm').on('submit', e => {
        e.preventDefault();
        let antColor = $('#color').val();
        let antNumber = Number($('#antNumber').val());
        addAnts(antNumber, antColor);
    });
    animate();


}());

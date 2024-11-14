(function () {
    const canvas = document.querySelector('#theCanvas');
    const context = canvas.getContext('2d');

    context.strokeRect(1, 100, 200, 200);
    context.fillStyle = 'blue';
    context.fillRect(75, 75, 50, 50);
    context.fillRect(75, 275, 50, 50);

    context.fillStyle = 'pink';
    context.beginPath();
    context.strokeStyle.width = 5;
    context.arc(100, 200, 50, 0, Math.PI * 2);
    context.fill();


}());
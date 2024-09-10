(function () {
    'use strict';
    const button1 = document.querySelector('#button1');
    let number = 2;
    button1.addEventListener('click', function () {
        const myNewButton = document.createElement('button');
        myNewButton.className = 'inline-button';
        document.body.appendChild(myNewButton);
        myNewButton.innerText = number;
        number++;
    });

}());
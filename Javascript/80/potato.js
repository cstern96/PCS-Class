(function () {
    'use strict';

    let dragging;
    let offset;

    document.addEventListener('mousedown', e => {
        e.preventDefault();
        if (e.target.className === 'part') {
            console.log('mouse down', e);
            dragging = e.target;
            dragging.style.position = 'absolute';
            offset = { y: e.offsetY, x: e.offsetX };
        }
    });

    document.addEventListener('mousemove', e => {
        if (dragging) {
            console.log('mouse move', e);
            dragging.style.top = `${e.pageY - offset.y}px`; dragging.style.left = `${e.pageX - offset.x}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (dragging) {
            const x = parseInt(dragging.style.left, 10);
            const y = parseInt(dragging.style.top, 10);
            const id = dragging.id;
            const storedPositions = JSON.parse(localStorage.getItem('draggablePositions')) || {};
            storedPositions[id] = { x, y };
            localStorage.setItem('draggablePositions', JSON.stringify(storedPositions));
        }
        dragging = null;
    });
    const storedPositions = JSON.parse(localStorage.getItem('draggablePositions')) || {};
    for (const id in storedPositions) {
        const part = document.getElementById(id);
        if (part) {
            part.style.position = 'absolute';
            part.style.left = storedPositions[id].x + 'px';
            part.style.top = storedPositions[id].y + 'px';
        }
    }
}());

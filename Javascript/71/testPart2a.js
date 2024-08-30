
window.app = window.app || {};
window.app.singleCounter = (function counterFunction(theModule) {
    'use strict';
    let count = 0;

    const counter = {};
    counter.increment = function () {
        return count++;
    };
    counter.getCount = function () {
        return count;
    };
    theModule.counter = counter;


    return theModule;

}(window.app.singleCounter || {}));













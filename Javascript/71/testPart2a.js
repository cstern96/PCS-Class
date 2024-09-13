
window.app = window.app || {};
window.app.singleCounter = (function counterFunction(theModule) {
    'use strict';
    let count = 0;

    // SL - works, but why not theModule.counter = {increment...,getCount...}. Less noisy...
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

// SL - nice!
// SL - not a problem but we didnt really need to pass in theModule and add to it here. COuld have just created and returned an object to be assigned to app.singleCounter. We dont plan on working on singleCounter in multiple files.

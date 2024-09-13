window.app = window.app || {};
window.app.counterCreater = (function createCounter(theModule) {

    let count = 0;


    function increment() {
        return count++;
    }
    function getCount() {
        return count;
    }
    theModule.increment = increment;
    theModule.getCount = getCount;
    return theModule;

}(window.app.counterCreater || {}));

// SL - this is pretty much the same thing as the other. There is only one of it...

//I was unable to get window.app to surround this
/*const counterCreater = (function createCounter() {

    let count = 0;


    function increment() {
        return count++;
    }
    function getCount() {
        return count;
    }
    return{
        increment,
        getCount
    };
}());
const counterA = counterCreater();
counterA.increment();
counterA.increment();
counterA.increment();
counterA.getCount();
// counterA.getCount = 3
const counterB = counterCreater();
counterB.increment();
counterB.increment();
counterB.getCount();
//counterA.getCount = 2*/

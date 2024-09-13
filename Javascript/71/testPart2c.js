(function () {
    const singleCounter1 = window.app.singleCounter.counter;

    // SL - ever hear of a for loop?
    singleCounter1.increment();
    singleCounter1.increment();
    singleCounter1.increment();
    singleCounter1.increment();
    singleCounter1.increment();
    singleCounter1.increment();
    singleCounter1.increment();
    singleCounter1.increment();
    singleCounter1.increment();
    singleCounter1.increment();



    let counterA = window.app.counterCreater;
    counterA.increment();
    counterA.increment();
    counterA.increment();
    counterA.increment();
    counterA.increment();

    // SL - we arent invoking a function to create something for us, we are just going to use the same counter that is already known as counterA
    let counterB = window.app.counterCreater;
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();
    counterB.increment();


    console.log(singleCounter1.getCount());
    console.log(counterA.getCount());
    console.log(counterB.getCount());

    // SL - since counterA and counterB are the same object - we see 20 for both...
}());

// SL - ok
// SL - grade - 85

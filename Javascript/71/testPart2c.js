(function () {
    const singleCounter1 = window.app.singleCounter.counter;
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
}());
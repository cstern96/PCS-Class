(function () {
    'use strict';
    const numbers = [5, 10, 15, 20, 100];

    function myMap(array1, callback) {
        const newArray = [];
        array1.forEach( x => {
          // SL - not at all a problem but why not just - newArray.push(callback(x))?
            let y = callback(x);
            newArray.push(y);
        });

        // SL - ok, but expected return was just the new array. Caller gave you the original, they dont really need it returned.
        return { array1, newArray };
    }

    console.log(myMap(numbers, x => x * 2 ));
}());

// SL - nice

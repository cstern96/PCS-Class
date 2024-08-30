(function () {
    'use strict';
    const numbers = [5, 10, 15, 20, 100];
    
    function myMap(array1, callback) {
        const newArray = [];
        array1.forEach( x => {
            let y = callback(x); 
            newArray.push(y);
        });
        return { array1, newArray };
    }
    
    console.log(myMap(numbers, x => x * 2 ));
}());
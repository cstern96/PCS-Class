'use strict';

const someLetters = ['A', 'B', 'C', 'D'];

/*function checkLetters(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i].toUpperCase()) {
            return false
        }
    }
    return true;
}
console.log(checkLetters(someLetters));*/

function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}
const uppercase = letter => letter === letter.toUpperCase();
const lowercase = letter => letter === letter.toLowerCase();
console.log(myEvery(someLetters, uppercase));
console.log(someLetters.every(uppercase));
console.log(myEvery(someLetters, lowercase));
console.log(someLetters.every(lowercase));



function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}
console.log(mySome(someLetters, uppercase));
console.log(someLetters.some(uppercase));
console.log(mySome(someLetters, lowercase));
console.log(someLetters.some(lowercase));

function myOnlyIf(arr, myFilter, action){
    for(let i = 0; i < arr.length; i++) {
        if (myFilter(arr[i])){
            action(arr[i]);
        }
    }
}





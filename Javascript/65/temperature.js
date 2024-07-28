'use strict'
function CtoF(C) {
    let F = C / 5 * 9 + 32;
    return F;
}




function FtoC(F) {
    let C = (F - 32) * 5 / 9;
    return C;
}


console.log(CtoF(32));
console.log(FtoC(32));
console.log(CtoF(100));
console.log(FtoC(100));

let celciusOrginal = prompt("Please enter a number you would like to convert from Celcius to Farenheit");
alert(CtoF(celciusOrginal));
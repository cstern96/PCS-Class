'use strict';

const dayOfWeek = (function () {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];
    function getDayName(index) {
        return days[index - 1];
    }
    function getDayNumber(name) {
        const index = days.findIndex(d => d === name);
        return index + 1;
    }
    return {
        getDayName,
        getDayNumber
    };
}());
console.log(dayOfWeek.getDayName(3));
console.log(dayOfWeek.getDayNumber('Tuesday'));

const interestCalculator = (function () {
    let rate = 0;
    let years = 0;
    return {
        setRate: function (r) {
            rate = r;
            return rate;
        },
        setYears: function (y) {
            years = y; 
            return years;
        },
        calculateInterest: function (P) {
            let R = rate;
            let T = years;
            return P * R * T;
        }
    };
}());
console.log(interestCalculator.setRate(.05));
console.log(interestCalculator.setYears(10));
console.log(interestCalculator.calculateInterest(100));



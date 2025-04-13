const sumAll = function(valueOne, value2) {
    if (valueOne === value2) {
        return valueOne + value2;
    } else if (valueOne < 0 || value2 < 0 || typeof valueOne !== 'number' || typeof value2 !== 'number' || !Number.isInteger(valueOne) || !Number.isInteger(value2)) {
        return 'ERROR';
    }   else {
        let min = Math.min(valueOne, value2);
        let max = Math.max(valueOne, value2);
        let sum = 0;
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;

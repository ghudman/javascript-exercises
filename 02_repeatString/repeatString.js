const repeatString = function(string, num) {
if (num >= 0) {
    let hold = ``;
    for (let i = 0; i < num; i++) {
        hold += string;
    }
    string = hold;
    return string;
} else {
    return 'ERROR';
}
}

// Do not edit below this line
module.exports = repeatString;

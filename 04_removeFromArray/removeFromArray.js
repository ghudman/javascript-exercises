const removeFromArray = function(array,...removeThis) {
    const forbidden = new Set(removeThis);
    return array.filter(value => !forbidden.has(value));
};

// Do not edit below this line
module.exports = removeFromArray;

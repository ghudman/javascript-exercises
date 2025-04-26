const palindromes = function (str) {
    var strToLower = str.toLowerCase();
    var punctuationless = strToLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var punctlessStr = punctuationless.replace(/\s{2,}/g," ");
    var finalString = punctlessStr.replaceAll(" ","");
    const strReversed = finalString.split('').reverse().join('');
    
    if (strReversed == finalString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

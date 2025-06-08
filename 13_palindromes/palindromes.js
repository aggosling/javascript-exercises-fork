const palindromes = function (str) {
    let formatString = str.replaceAll(" ", "");
    formatString = formatString.replaceAll(".","");
    formatString = formatString.replaceAll(',',"");
    formatString = formatString.replaceAll("!", "");
    formatString = formatString.toLowerCase();
    for (let i = 0; i < (formatString.length / 2); i++) {
        if (formatString[i] !== formatString[formatString.length - 1 - i])
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

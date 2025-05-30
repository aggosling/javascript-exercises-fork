const repeatString = function(str, repeat) {
    if (repeat < 0)
        return 'ERROR'
    let newStr = ''
    for (var i = 0; i < repeat; i++) {
        newStr += str
    }
    return newStr
};

// Do not edit below this line
module.exports = repeatString;

const fibonacci = function(number) {
    if (typeof number != Number)
        number = Number(number);
    if (number < 0)
        return "OOPS";
    else if (number == 0 || number == 1)
        return number;
    let fibArray = [];
    for (var i = 0; i <= number; i++) {
        if (i == 0 || i == 1)
            fibArray.push(1);
        else
            fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
    return fibArray[number-1];
};

// Do not edit below this line
module.exports = fibonacci;

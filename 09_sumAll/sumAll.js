const sumAll = function(low, high) {
    for (arg of arguments) {
        if (typeof arg != "number" || arg % 1 !== 0 || arg < 0)
            return 'ERROR';
    }
    if (low > high) {
        const temp = low;
        low = high;
        high = temp;
    }
    let sum = 0;
    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

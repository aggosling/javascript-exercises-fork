const removeFromArray = function(array, ...args) {
    for (var i = 0; i < args.length; i++) {
        for (var j = 0; j < array.length; j++) {
            var index = array.indexOf(args[i])
            if (index > -1)
                array.splice(index, 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;

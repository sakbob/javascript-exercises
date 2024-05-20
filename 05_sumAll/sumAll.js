const sumAll = function(min, max) {
    if (min < 0 || max < 0) {
        return "ERROR";
    }

    if (typeof(min) != "number" || typeof(max) != "number") {
        return "ERROR";
    }

    let toReturn = 0;
    if (min > max) {
        toReturn = min;
        min = max;
        max = toReturn;
        toReturn = 0;
    }

    for (let i = min; i <= max; i++) {
        toReturn += i;
    }

    return toReturn;
};

// Do not edit below this line
module.exports = sumAll;

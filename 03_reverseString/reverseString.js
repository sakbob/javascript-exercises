const reverseString = function(string) {
    let toReturn = "";

    for (let i = string.length - 1; i >= 0; i--) {
        toReturn += string[i];
    }

    return toReturn;
};

// Do not edit below this line
module.exports = reverseString;

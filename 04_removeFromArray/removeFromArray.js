const removeFromArray = function(array, ...args) {
    const toReturn = [];

    array.forEach((element) => {
        if (!args.includes(element)) {
            toReturn.push(element);
        }
    });

    return toReturn;
};

// Do not edit below this line
module.exports = removeFromArray;

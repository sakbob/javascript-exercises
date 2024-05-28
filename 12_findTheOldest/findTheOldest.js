const findTheOldest = function(array) {
    const sortedArray = array.sort(compare);

    return sortedArray[0];
};

function compare(a, b) {
    let aAge;
    let bAge;

    if (!("yearOfDeath" in a)) {
        aAge = 2024 - a.yearOfBirth;
    }
    else {
        aAge = a.yearOfDeath - a.yearOfBirth;
    }

    if (!("yearOfDeath" in b)) {
        bAge = 2024 - b.yearOfBirth;
    }
    else {
        bAge = b.yearOfDeath - b.yearOfBirth;
    }

    return bAge - aAge;
}

// Do not edit below this line
module.exports = findTheOldest;

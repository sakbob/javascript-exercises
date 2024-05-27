const palindromes = function (string) {
    let valid = "abcdefghijklmnopqrstuvwxyz0123456789";

    let newString = string
        .toLowerCase()
        .split("")
        .filter((char) => valid.includes(char))
        .join("");

    let reverseString = newString.split("").reverse().join("");

    return reverseString === newString;
};

// Do not edit below this line
module.exports = palindromes;

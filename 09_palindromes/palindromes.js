const palindromes = function (word) {
    //Remove symbols and capitalize
    letters = word.replace(/[^\w]/gi,'').toUpperCase(); //Numbers unaffected
    let reverseWord = '';
    let len = letters.length;
    //reverse characters
    for(let i = 1; i <= len; i++){
        reverseWord += letters.charAt(len-i);
    }
    return letters === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;

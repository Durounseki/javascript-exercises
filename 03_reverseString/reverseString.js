const reverseString = function(text) {
    reverseText = "";
    textLength = text.length;
    for(let i=1; i <= textLength; i++){
        reverseText += text.charAt(textLength-i);
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;

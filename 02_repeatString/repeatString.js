const repeatString = function(text, numRepeat) {
    let repeatText = ""
    if (numRepeat >= 0){
        for(let i=0; i<numRepeat; i++){
            repeatText += text;
        }
        return repeatText;
    }else{
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;

const sumAll = function(number1,number2) {
    //Check that both variables are numbers
    if(!(typeof(number1+number2)==='number')){
        return 'ERROR';
    }
    //Find the max and min between number1 and number2
    first = Math.min(number1,number2);
    last = Math.max(number1,number2);

    //Check for negative values
    if(first < 0){
        return 'ERROR';
    }

    //Use the expression 1+2+...+n = n*(n+1)/2
    sumLast = last*(last+1)/2;
    sumFirst = first*(first-1)/2;

    return sumLast - sumFirst;
};

// Do not edit below this line
module.exports = sumAll;

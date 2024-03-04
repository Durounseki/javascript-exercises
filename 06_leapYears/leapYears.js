const leapYears = function(year) {
    let quotient = year/4
    if(quotient !== Math.floor(quotient)){
        return false;
    }
    if( quotient%25 === 0){
        if(quotient%4 !== 0){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = leapYears;

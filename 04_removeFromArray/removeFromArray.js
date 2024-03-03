const removeFromArray = function(array, ...elements) {
    let element = undefined;
    let index = -1;
    for(let i=0; i<elements.length; i++){
        element=elements[i];
        index = array.indexOf(element);
        while(index >=0 ){
            array.splice(index,1);
            index = array.indexOf(element);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

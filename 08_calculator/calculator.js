const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  return numArray.reduce((acc,curr) => acc + curr,0);
};

const multiply = function(numArray) {
  return numArray.reduce((acc,curr) => acc * curr,1);
};

const power = function(num,pow) {
	//0 to any power is zero
  if(num === 0){
    return 0;
  }
  //Only works for integer power
  let result = 1; //Any number to the zero power is 1
  if(Math.round(pow) !== pow){
    return 'ERROR';
  }
  if(pow > 0){
    for(let i=0; i < pow; i++){
      result *= num;
    }
  }if(pow < 0){
    for(let i=0; i < Math.abs(pow); i++){
      result /= num;
    }
  }
  
  return result;
};

const factorial = function(num) {
	//Only works for non negative integers
  if(num < 0 || Math.round(num) !== num){
    return 'ERROR';
  }
  let result = 1; //0!=1
  for(let i = 1; i <= num; i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const fibonacci = function(n) {
    //The elements of the fibonacci series are given by the recursion
    //f_{n+1} = f_{n}+f_{n-1}, defining auxiliary variables x and y
    //so that f_n = A*x^n+B*y^n, we find after replacing and equating
    //powers of x and y, that these must satisfy the equation
    //x^n=x^(n-1)+x^(n-2) or x^2-x-1=0. The roots of this equation are
    //x=(1+sqrt(5))/2 and y=(1-sqrt(5))/2
    //Now f_0 = 0 and f_1 = 1, leads to A+B = 0 and Ax+By = 1
    //which has solution A = 1/(x-y) = -B and leads to the Binet
    //formula for the Fibonacci nth element
    //f_n = (x^n-y^n)/(x-y), where x is called the golden ratio.

    //Accept positive integers and strings but not negative numbers
    n = parseInt(n);
    if(n<0){
        return "OOPS";
    }
    let x = (1+Math.sqrt(5))/2;
    //The exercise omits the 
    let fn = (x**n - (1-x)**n)/Math.sqrt(5); //After simplifying

    //Deal with numerical errors and convert to integer
    return Math.round(fn);
};

// Do not edit below this line
module.exports = fibonacci;

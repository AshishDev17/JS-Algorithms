/**
 * Created by Ash on 6/3/2017.
 */
/*
 The Fibonacci sequence is a series of numbers where a number is found by adding up the two numbers before it.
 Starting with 0 and 1, the sequence goes 1, 1, 2, 3, 5, 8, 13, 21, 34, and so forth. Written as a rule,
 the expression is xn = xn-1 + xn-2. How do get nth Fibonacci number?*/

/*function fibonacci(n){
    var fibonacci = [0, 1];

    if(n <= 2) return 1;

    for(var i = 2; i <= n; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci[n];
}*/

/*function fibonacci(n){
    if(n<=1)
        return n;
    else
        return fibonacci(n-1) + fibonacci (n-2);
}*/

function fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return num;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

console.log(fibonacci(3));

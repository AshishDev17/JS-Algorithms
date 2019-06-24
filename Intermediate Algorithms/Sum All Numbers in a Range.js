/**
 * Created by Ash on 3/8/2017.
 */
/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.*/

function sumAll(arr) {
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    var result = 0;

    for(var i = min; i <= max; i++){
        result += i;
    }

    return result;
}

console.log(sumAll([10, 5]));

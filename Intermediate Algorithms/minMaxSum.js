/**
 * Created by Ash on 6/13/2017.
 */
/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four
of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated
long integers.*/


function minMaxOfSumOfFour(arr){
    var sortedArr = arr.sort();
    var sum = 0;
    var min = sortedArr[0];
    var max = sortedArr[arr.length - 1];

    arr.forEach(function(num){
        sum += num;
    });

    return [(sum - max), (sum - min)];
}

console.log(minMaxOfSumOfFour([1, 2, 3, 4, 5]));
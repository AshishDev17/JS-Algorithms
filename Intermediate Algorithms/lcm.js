/**
 * Created by Ash on 6/10/2017.
 */
/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by
all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers
between 1 and 3.
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.*/


function smallestCommons(arr) {
    var sorted = arr.sort();
    var min = sorted[0];
    var max = sorted[1];
    var lcm = min;

    for(var i = min + 1; i <= max; i++){
        lcm = smallestCommonMultiple(lcm, i);
    }

    return lcm;
}

function smallestCommonMultiple(num1 , num2){
    return (num1 * num2) / greatestCommonDivisor(num1, num2);
}

function greatestCommonDivisor(num1, num2){
    while(true){
        if(num1 === 0){return num2;}
        num2 = num2 % num1;

        if(num2 === 0){return num1;}
        num1 = num1 % num2;
    }
}



smallestCommons([1,5]);

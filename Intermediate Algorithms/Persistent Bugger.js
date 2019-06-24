/**
 * Created by Ash on 3/3/2017.
 */
/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.
For example:
persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit
persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
persistence(4) === 0 // because 4 is already a one-digit number*/

function persistence(num){
    var persistence = 0;

    while(num > 10){
      persistence++;
      num = productOfDigits(num);
    }

    return persistence;
}

function productOfDigits(num){
    return num.toString().split('').map(Number).reduce(function(product, digit){
        return product * digit;
    });
}

/*
function persistence(num) {
    var times = 0;

    num = num.toString();

    while (num.length > 1) {
        times++;
        num = num.split('').map(Number).reduce(function(a, b){
            return a * b
            }).toString();
    }

    console.log(times);
}
*/

/*function numToDigits(num){
    var output = [];

    while(num){
        output.push(num % 10);
        num = Math.floor(num / 10);
    }

    return output.reverse();
}

function multiplyArray(arr){
    var result = 1;

    arr.forEach(function(val){
        result *= val;
    });

    return result;
}

function persistence(num) {
    var count = 0;
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if(numbers.indexOf(num) >= 0 || num < 0){
        console.log(count);
    }
    else{
        while(numbers.indexOf(num) < 0){
            var digits = numToDigits(num);
            count ++;
            num = multiplyArray(digits);
        }
        console.log(count);
    }
}*/

console.log(persistence(999));
/**
 * Created by Ash on 6/4/2017.
 */

//gcd of more than two numbers
function gcdOfMultipleNums(arr){
    var a = arr[0];

    for(var i = 1; i < arr.length; i++){
        var b = arr[i];

        a = gcd(a,b);
    }

    return a;
}

function gcd(a, b){
    if(a > 0 && b > 0){
        if(b > a){ var temp = b; b = a; a = temp;}
        while(true){
            if(b === 0) return a;
            a = a % b;

            if(a === 0) return b;
            b = b % a;
        }
    }
    else{
        return null;
    }
}


console.log(gcdOfMultipleNums([20, 100, 50, 40, 45]));

/*function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}*/

/*function gcd(a, b){
    if(a > 0 && b > 0){
        var divisor = 2,
            greatestCommonDivisor = 1;

        while (a >= divisor && b >= divisor){
            if(a % divisor === 0 && b % divisor === 0){
                greatestCommonDivisor = divisor;
            }

            divisor++;
        }

        return greatestCommonDivisor;
    }
    else{
        return null;
    }

}*/

/*function gcd(a, b){
    if(a > 0 && b > 0){
        if(b > a){ var temp = b; b = a; a = temp;}
        while(true){
            if(b === 0) return a;
            a = a % b;

            if(a === 0) return b;
            b = b % a;
        }
    }
    else{
        return null;
    }

}*/

//recursive
/*
function gcd(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

console.log(gcd(8,7));*/



/*
 * Created by Ash on 1/22/2017.
 */

function isPrime(num) {
    if(num <= 1){
     return false;
    }
    for (var denominator = 2; denominator <= Math.sqrt(num); denominator++){
        if(num % denominator ===0){
           return false;
        }
     }
     return true;
}

console.log(isPrime(121));
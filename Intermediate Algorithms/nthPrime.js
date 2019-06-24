/**
 * Created by Ash on 6/13/2017.
 */
/*function nthPrime(n){
    var primes = [];
    var num = 2;

    while(primes.length < n){
        if(isPrime(num)){
            primes.push(num);
        }

        num++;
    }

    return primes[primes.length - 1];
}*/

function primes(n){
    var primes = [];
    var num = 2;

    while(primes.length < n){
        if(isPrime(num)){
            primes.push(num);
        }

        num++;
    }

    return primes;
}

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

console.log(primes(42));
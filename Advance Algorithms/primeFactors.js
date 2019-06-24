/**
 * Created by Ash on 6/3/2017.
 */
//Find all prime factors of a number

/*function primeFactors(n){
    var factors = [],
        divisor = 2;

    while(n >= 2){
        if(n % divisor == 0){
            factors.push(divisor);
            n /= divisor;
        }
        else{
            divisor++;
        }
    }
    return factors;
}*/

function primeFactors(n){
    var factors = [],
        divisor = 2;

    while(divisor <= n){
        if(n % divisor == 0){
            factors.push(divisor);
            n /= divisor;
        }
        else{
            divisor++;
        }
    }

    return factors;
}

console.log(primeFactors(11));
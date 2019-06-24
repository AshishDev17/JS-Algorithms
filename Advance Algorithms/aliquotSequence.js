/*Aliquot Sequence
A number's aliquot sum is the sum of all of its factors excluding itself.
For example, the aliquot sum of 10 is: 1 + 2 + 5 = 8
We can use the aliquot sum to define a special sequence, called the
aliquot sequence. The aliquot sequence of a number begins with the
number itself. The second number in the sequence is the first number's
aliquot sum, the third number is the second number's aliquot sum, and
so on.
For example, the first 4 numbers in the aliquot sequence of 10 are: 10, 8, 7, 1
Write a function that takes in two numbers, base and n, and returns the
aliquot sequence of length n starting with base.
Examples:
aliquotSequence(10, 4) # => [10, 8, 7, 1]
aliquotSequence(10, 2) # => [10, 8]
aliquotSequence(7, 4) # => [7, 1, 0, 0]*/

function aliquotSequence(base, n){
    var aliquotSequence = [];

    while(n > 0){
        aliquotSequence.push(base);
        base = aliquotSum(base);
        n--;
    }

    return aliquotSequence;
}

function aliquotSum(num){
    if(num <= 1){
        return 0;
    }
    var sum = 0;

    //factors excluding itself
    for(var i = 1; i < num; i++){
        if(num % i === 0){
            sum += i;
        }
    }

    return sum;
}

console.log(aliquotSequence(10, 4));
console.log(aliquotSequence(7, 4));
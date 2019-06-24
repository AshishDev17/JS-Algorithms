/**
 * Created by Ash on 6/10/2017.
 */


function sumFibs(num) {
    var fibonacci = [1, 1];
    var sum = 0;

    //iterate through while loop and find out fibonacci sequence less than number
    var i = 2;
    while(true){
        var fibonacciNum = fibonacci[i - 1] + fibonacci[i - 2];

        if(fibonacciNum <= num){
            fibonacci.push(fibonacciNum);
        }
        else{
            break;
        }

        i++;
    }

    fibonacci.forEach(function(num){
        if(num % 2 !== 0){
            sum += num;
        }
    });

    return sum;
}

console.log(sumFibs(4));
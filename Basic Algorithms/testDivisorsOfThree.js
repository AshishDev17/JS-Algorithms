/**
 * Created by Ash on 6/13/2017.
 */
/*
You will be given 2 parameters: a low number, and high number. Your goal is to print all numbers between low and
high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible
by 3, print the word "div3" directly after the number.
If the function call is: test_divisors(2, 10) then the output should be:

2
3
"div3"
4
5
6
"div3"
7
8
9
"div3"
10
*/

function testDivisors(low, high){
    for(var i = low; i <= high; i++){
        if(i % 3 === 0){
            console.log(i);
            console.log("div3");
        }
        else{
            console.log(i);
        }
    }
}

testDivisors(2, 10);
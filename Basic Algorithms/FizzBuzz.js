/**
 * Created by Ash on 3/1/2017.
 */
/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible
by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

function fizzBuzz(number){
    for(var i = 1; i <= number; i++){
        var value = (i % 3 === 0) ? (i % 5 === 0) ? "FizzBuzz" : "Fizz" : (i % 5 === 0) ? "Buzz" : i;
        console.log(value);
    }

    /*for(var i = 1; i <=number; i++){
        if(i % 3 === 0){
            if(i % 5 === 0){
                console.log("FizzBuzz");
            }
            else{
                console.log("Fizz");
            }
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }*/
}

fizzBuzz(100);
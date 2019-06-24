/**
 * Created by Ash on 2/9/2017.
 */
//write a function that accepts an array of numbers and return the sum of all numbers in the array

function sumArray(arr){
    var total = 0;

    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    console.log(total);
}

sumArray([500, 308, 100, 404]);
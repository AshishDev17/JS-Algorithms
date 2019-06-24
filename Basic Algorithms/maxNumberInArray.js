/**
 * Created by Ash on 2/9/2017.
 */
//Write a function that accepts an array of numbers and return the maximum number in that array

function max(arr){
    return Math.max.apply(null, arr);
}

/*
function max(arr){
      arr.sort(function(a, b){
          return b - a;
      });

      console.log(arr[0]);
      return arr[0];
}
*/

/*function max(arr){
    var largestNumber = arr[0];

    for(var i = 1; i < arr.length; i++){
        if(arr[i] > largestNumber){
            largestNumber = arr[i];
        }
    }
    console.log(largestNumber);
}*/

console.log(max([23, 44, 55, 11, 10000]));
/**
 * Created by Ash on 6/11/2017.
 */
/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument)
returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you
should drop it or not.
Return the rest of the array, otherwise return an empty array.
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
    */


function dropElements(arr, func) {
    while(arr.length > 0){
        if(func(arr[0])){
            break;
        }
        else{
            arr.shift();
        }
    }

    return arr;

    /*var i = 0;

     while(i < arr.length){
     if(func(arr[i])){
     break;
     }

     i++;
     }

     return arr.slice(i);*/
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
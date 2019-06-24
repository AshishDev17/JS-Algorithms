/**
 * Created by Ash on 2/9/2017.
 */
//Write a function which  takes an array as an argument and return true if all elements in the array are identical

function isUniform(arr){
    var sortedArr = arr.sort();

    if(sortedArr[0] === sortedArr[sortedArr.length - 1]){
        return true;
    }

    return false;
}
/*function isUniform(arr){
    var firstElement = arr[0];

    for(var i = 1; i< arr.length; i++){
        if(firstElement!==arr[i]){
            console.log(false);
        }
    }
    console.log(true);
}*/

console.log(isUniform([1, 1, 3, 1, 1, 1]));
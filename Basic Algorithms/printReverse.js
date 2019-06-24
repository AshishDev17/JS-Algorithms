/**
 * Created by Ash on 2/9/2017.
 */
function printReverse(arr){
    arr.sort(function(a,b){
        return b-a;
    });
    return arr;
};

console.log(printReverse([1, 3, 4, 6, 2, 5]));
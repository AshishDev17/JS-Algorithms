/**
 * Created by Ash on 1/20/2017.
 */

function destroyer(arr) {
    var argsArray = Array.prototype.slice.call(arguments);

    var newArray = arr.filter(function(val){
        return argsArray.indexOf(val) < 0;
    });

    return newArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

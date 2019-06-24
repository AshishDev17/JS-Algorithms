/**
 * Created by Ash on 1/19/2017.
 */
function bouncer(arr) {
    var newArray = [];

    newArray = arr.filter(function(value){
        return Boolean(value);
    });
    return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
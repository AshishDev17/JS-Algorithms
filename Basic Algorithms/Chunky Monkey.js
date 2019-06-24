/**
 * Created by Ash on 1/19/2017.
 */
function chunkArrayInGroups(arr, size) {

    var newArray = [];

    for(i=0; i< arr.length; i+=size){
         newArray.push(arr.slice(i, i+size));
    }
    return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
/**
 * Created by Ash on 1/19/2017.
 */
function slasher(arr, howMany) {
    // return arr.splice(0, howMany);

   return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));
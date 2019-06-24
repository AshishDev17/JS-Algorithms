/**
 * Created by Ash on 6/13/2017.
 */
//find the greatest difference of numbers in an array


function greatestDifference(arr){
    var maxDifference = 0;

    arr.reduce(function(previous, current){
        var difference = Math.max(previous - current, 0);

        difference > maxDifference ? maxDifference = difference : null;

        if(difference === 0){
            return current;
        }
        else{
            return previous;
        }
    });

    if(maxDifference === 0){
        return -1;
    }

    return maxDifference;
}

console.log(greatestDifference([45, 24, 35, 31, 40, 38, 11]));
console.log(greatestDifference([45, 45, 45, 45, 45]));
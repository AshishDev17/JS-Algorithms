/**
 * Created by Ash on 3/14/2017.
 */
/*
 Write a function, `nearest_larger(arr, i)` which takes an array and an
 index.  The function should return another index, `j`: this should
 satisfy:
 (a) `arr[i] < arr[j]`, AND
 (b) there is no `j2` closer to `i` than `j` where `arr[i] < arr[j2]`.
 In case of ties (see example below), choose the earliest (left-most)
 of the two indices. If no number in `arr` is larger than `arr[i]`,
 return null.*/

function nearestLarger(arr, i){
    var diff = 1;

    while(true){
        var leftIndex = i - diff;
        var rightIndex = i + diff;

        if(leftIndex >= 0 && arr[leftIndex] > arr[i]){
            return leftIndex;
        }
        else if(rightIndex < arr.length && arr[rightIndex] > arr[i]){
            return rightIndex;
        }
        else if(leftIndex < 0 && rightIndex >= arr.length){
            return null;
        }

        diff ++;
    }
}
console.log("===============================================");
console.log("nearestLarger([2,3,4,8], 2) == 3: "  + (nearestLarger([2,3,4,8], 2) == 3).toString());
console.log("nearestLarger([2,8,4,3], 2) == 1: "  + (nearestLarger([2,8,4,3], 2) == 1).toString());
console.log("nearestLarger([2,6,4,8], 2) == 1: "  + (nearestLarger([2,6,4,8], 2) == 1).toString());
console.log("nearestLarger([2,6,4,6], 2) == 1: "  + (nearestLarger([2,6,4,6], 2) == 1).toString());
console.log("===============================================");
/**
 * Created by Ash on 6/13/2017.
 */
/*
 You will be given an array with 5 numbers. The first 2 numbers represent a range, and the next two numbers represent
 another range. The final number in the array is X. The goal of your program is to determine if both ranges overlap
 by at least X numbers. For example, in the array [4, 10, 2, 6, 3] the ranges 4 to 10 and 2 to 6 overlap by at least
 3 numbers (4, 5, 6), so your program should return true.*/


function overlappingRanges(arr){
    var overlapCount = 0;
    var a0 = arr[0];
    var a1 = arr[1];
    var b0 = arr[2];
    var b1 = arr[3];
    var overlaps = arr[4];

    for(var i = a0; i <= a1; i++){
        for(var j = b0; j <= b1; j++){
            if(i === j){
                overlapCount++;
            }
        }
    }

    if(overlapCount < overlaps){
        return false;
    }

    return true;
}

console.log(overlappingRanges([4, 10, 2, 6, 3])); //true
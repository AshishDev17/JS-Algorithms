/**
 * Created by Ash on 3/7/2017.
 */
/*
Write a function oddball_sum(numbers), which takes in an array of integers and returns the sum of all the
odd elements.
oddball_sum([1,2,3,4,5]) == 9  => 1 + 3 + 5 == 9
oddball_sum([0,6,4,4]) == 0
oddball_sum([1,2,1]) == 2*/

function oddBallSum(nums){
    var result = 0;
    nums.forEach(function(val){
        if(val % 2 !== 0){
            result += val;
        }
    });

    return result;
};

console.log(oddBallSum([1,2,1]));
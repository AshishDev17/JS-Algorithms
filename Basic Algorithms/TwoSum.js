/**
 * Created by Ash on 3/2/2017.
 */
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].*/

// var twoSum = function(nums, target) {
//     var arr = [];
//     for(var j = 0; j < nums.length; j++){
//         for(var i = j + 1; i < nums.length; i++ ){
//             if(nums[j] + nums[i] === target){
//                 arr.push(j, i);            }
//         }
//     }

//     return arr;
// };

const twoSum = (nums, target) => {
    const numsObj = new Map();
    const arr = [];

    for(var i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if(numsObj.has(complement)){
            arr.push(i, numsObj.get(complement));
            break;
        }

        numsObj.set(nums[i], i);

    }

    console.log(numsObj);
    return arr;
};

module.exports = {
    twoSum
};

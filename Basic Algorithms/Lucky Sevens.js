/**
 * Created by Ash on 3/7/2017.
 */
/*
Write a function lucky_sevens?(numbers), which takes in an array of integers and returns true if any three consecutive
elements sum to 7.
lucky_sevens?([2,1,5,1,0]) == true # => 1 + 5 + 1 == 7
lucky_sevens?([0,-2,1,8]) == true # => -2 + 1 + 8 == 7
lucky_sevens?([7,7,7,7]) == false
lucky_sevens?([3,4,3,4]) == false*/


function isLuckySevens(nums){
    for(var i = 0; i < nums.length - 2; i++){
        if(nums[i] + nums[i + 1] + nums[i + 2] === 7){
            return true;
        }
    }
    return false;
};

console.log(isLuckySevens([2,1,2,4,0]));
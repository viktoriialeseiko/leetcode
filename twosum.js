// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// what if it's emplty array => return empty array?
//what if they are no matching pairs what to return?


var twoSum = function(nums, target) {
    const comp = new Map();
    const len = nums.length;
    
    for(let i=0; i<len; i++){
        if(comp[nums[i]] >= 0){
            return [comp[nums[i]], i]
        }
        comp[target - nums[i]] = i;
    }
    return [];
};
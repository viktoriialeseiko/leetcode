// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

var containsDuplicate = function(nums) {
    const map = {}
    for(const num of nums) {
        // If we have seen this num before return true
        if(map[num]) return true
        map[num] = true
    }
    return false
};


// Time Complexity : O(n)
// Space Complexity: O(n)
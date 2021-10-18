// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

var isPalindrome = function(x) {
    let len = x.length;
    let mid = Math.floor(len/2);
    
    for (let i=0; i<mid; i++) {
        if(x[i] !== x[len-1-i]) {
            return false;
        }
    }
    return true;
};
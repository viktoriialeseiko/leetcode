// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// var isPalindrome = function(x) {
//     let len = x.length;
//     let mid = Math.floor(len/2);
    
//     for (let i=0; i<mid; i++) {
//         if(x[i] !== x[len-1-i]) {
//             return false;
//         }
//     }
//     return true;
// };

var isPalindrome = function(x) {
    // Base condition
    if (x < 0) {
        return false;
    }
    // Store the number in a variable
    let number = x;
    // This will store the reverse of the number
    let reverse = 0;
    while (number > 0) {
        reverse = reverse * 10 + number % 10;
        number = parseInt(number / 10);
    }
    return x === reverse;
};
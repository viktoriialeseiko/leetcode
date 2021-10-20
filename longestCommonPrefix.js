// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.




// Solution #1: Double loop
// In this solution, we initially loop through the first provided string’s characters. For each character, we then loop through the remaining words, checking whether they contain the same character, in the same position.
// If we find one that doesn’t, that means that the previous character tested marked the end of the longest prefix, so we return the first string up to and including that character. Otherwise, if our loops make it all the way to the end, that means the entire first string was found in all other strings, and thus that the entire first string is the longest prefix.


var longestCommonPrefix = function (strs) {
    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first string
    for (let i = 0; i <= strs[0].length; i++) {
        // Loop through the other strings
        for (let j = 1; j < strs.length; j++) {
            // Check if this character is also present in the same position of each string
            if (strs[0][i] !== strs[j][i]) {
                // If not, return the string up to and including the previous character
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
};


// Solution #2: Array.every()
// Using the wonderful JavaScript array function every() (which returns whether or not every element in an array passes a given condition), we can remove the (visible) second loop and tidy up our code a little. But to be honest, it’s otherwise a near-identical solution (except for the fact that unlike with the double-loop approach, this one also checks the initial string, which is technically a pointless comparison as that’s where we started):


var longestCommonPrefix = function (strs) {
    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first word
    for (let i = 0; i <= strs[0].length; i++) {
        // Check if this character is present in the same position of every string
        if (!strs.every((string) => string[i] === strs[0][i])) {
            // If not, return the string up to and including the previous character
            return strs[0].slice(0, i);
        }
    }

    return strs[0];
};
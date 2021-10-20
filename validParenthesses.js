// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false



// Solution 1.
var isValid = function(s) {
    var stack = [];
    var len = s.length;
    var map = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    for (var i = 0; i < len; i++) {
      if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
    return stack.length === 0;
  };

// Time complexity : O(n).
// Space complexity : O(n).



// Solution 2.
var isValid = function (s) {

    const obj = {
      "(": ")",
      "{": "}",
      "[": "]",
    }
  
    const stack = [];
  
    for (const paran of s) {
      if (obj.hasOwnProperty(paran)) {
        stack.push(paran)
      } else {
        const closeParan = stack.pop();
        if (paran !== obj[closeParan]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };


// Explanation:
//   We declare a hashmap with opening brackets as key and closing ones as their values. Next, we initialize an empty array and will use it as our stack to store opening braces.
//   Next, we are looping over all the characters of the string, and in this case, all the braces present in the string. In the next condition, we check if the character is an opening bracket, if yes we push it to the stack.
//   If the character is a closing bracket, we check for the last entry in the stack. If the last entry in the stack is the opening counterpart of the current closing bracket, we remove the entry from stack. It balances the bracket. If no, the braces are not balanced, hence we return false and exit.
//   In the end, if the stack is not empty, it means there was some opening bracket for which closing bracket was not found in order. Thus we return false or true depending on stack length.


// Time complexity: O(n)
// Space complexity: O(n)

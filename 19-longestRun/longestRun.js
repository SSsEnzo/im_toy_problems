/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function(string) {
  var longest;
  var check = [0];
  for (let i = 1; i < string.length; i++) {
    if (
      check.length === 2 &&
      (longest === undefined || longest[1] - longest[0] < check[1] - check[0])
    ) {
      longest = check.slice();
    }
    if (string[check[0]] === string[i]) {
      string[check[1]] = i;
    } else if (string[check[0]] !== string[i]) {
      string[check[0]] = i;
    }
  }
  return longest;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function(len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

console.log(longestRun("aabbbcb"));

/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  array.sort(function(a, b){return a-b})
  return array[array.length-1] * array[array.length-2] * array[array.length-3]
};


// console.log(largestProductOfThree([2, 1, 3, 10, 4, 7]));

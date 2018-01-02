/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

var nthFibonacci = function (n) {
<<<<<<< HEAD
  var array = [];
  var recursive = function(arr, num) {
    if (arr.length !== n && arr.length > 1) {
      arr.push(arr[arr.length-1] + arr[arr.length - 2]);
      recursive(arr, num);
    } else if (arr.length < 2 && n !== 1 && n !== 0) {
      arr.push(arr.length);
      recursive(arr, num);
    } else if (n === 1 || n === 0) {
      arr.push(arr.length);
    }
  }
  recursive(array, n);

  return array[array.length -1] + array[array.length -2];
};

console.log(nthFibonacci(6));
=======
  // TODO: implement me!
};



>>>>>>> ed85398fc45c41d26603702729387c6419033ce3
